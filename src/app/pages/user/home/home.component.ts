import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Company } from 'src/app/lib/Interfaces/company';
import { AdminFirebaseService } from 'src/app/lib/services/admin-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
