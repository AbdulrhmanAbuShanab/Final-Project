import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminFirebaseService } from 'src/app/lib/services/admin-firebase.service';
import { Company } from 'src/app/lib/Interfaces/company';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.css']
})
export class AllCompaniesComponent implements OnInit {

  companies: Company[]=[];
  displayedColumns:string[] = ['city', 'companyName', 'email', 'founder', 'logo', 'sector', 'edit', 'delete'];
  constructor(private companiesService: AdminFirebaseService, public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companiesService.getCompanies()
    .subscribe((response)=> {
      this.companies  = response;
    });
  }

  deleteCompany(id: string){
   console.log(id);
    let dialogRef = this.dialog.open(DeleteComponent, {
       width: '500px',
       data: {id: id}
     });
     console.log(id);
     dialogRef.afterClosed().subscribe((result)=> {
         this.getCompanies();
     })

    }
  }
