import { Component } from '@angular/core';
import { Company } from 'src/app/lib/Interfaces/company';
import { AdminFirebaseService } from 'src/app/lib/services/admin-firebase.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  companies: Company[]=[];
  constructor(private companiesService: AdminFirebaseService){
  }
  ngOnInit(): void {
    this.getCompanies();
  }
  getCompanies(){
    this.companiesService.getCompanies()
    .subscribe((response)=> {
      this.companies = response;
    });
  }
}
