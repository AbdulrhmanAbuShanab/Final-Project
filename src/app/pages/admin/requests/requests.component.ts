import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminFirebaseService } from 'src/app/lib/services/admin-firebase.service';
import { DeleteRequestComponent } from '../delete-request/delete-request.component';
import { Router } from '@angular/router';
import { Company } from 'src/app/lib/Interfaces/company';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  
  requests: Company[]=[];
  displayedColumns:string[] = ['city', 'companyName', 'email', 'founder', 'logo', 'phone', 'sector', 'accept', 'remove'];
  constructor(private requetsService: AdminFirebaseService, public dialog: MatDialog, private router: Router){

  }
  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(){
    this.requetsService.getRequests()
    .subscribe((response)=> {
      this.requests  = response;
    });
  }
  removeRequest(id: string){
    console.log(id);
     let dialogRef = this.dialog.open(DeleteRequestComponent, {
        width: '500px',
        data: {id: id}
      });
      dialogRef.afterClosed().subscribe((result)=> {
          console.log(result); 
          this.getRequests();
      })
     }
   }

   
