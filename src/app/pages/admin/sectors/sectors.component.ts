import { Component } from '@angular/core';
import { Sector } from 'src/app/lib/Interfaces/sector';
import { AdminFirebaseService } from 'src/app/lib/services/admin-firebase.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent {
  sectors: Sector[]=[];
  displayedColumns:string[] = ['sectorName', 'sectorLogo'];

  constructor(private sectorsService: AdminFirebaseService){
  }
  //calling the function on the page start
  ngOnInit(): void {
    this.getSectors();
  }
  //Using getSectors from the firebase service and store the response in an array of sector type
  getSectors(){
    this.sectorsService.getSectors()
    .subscribe((response)=> {
      this.sectors  = response;
    });
  }
}
