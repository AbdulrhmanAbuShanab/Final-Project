import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AdminFirebaseService } from 'src/app/lib/services/admin-firebase.service';
import { Company } from 'src/app/lib/services/company';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  company: Company = {
    city: '',
    companyName: '',
    email: '',
    founder: '',
    logo: '',
    numOfEmployees: 0,
    sector: [],
    website: '',
    yearOfEstablishment: 0,
  };
  companies:Company[] = [];
  companies$? : Observable<Company[]>;
  sub?: Subscription;
  constructor(private companiesService: AdminFirebaseService, private router: Router){

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  ngOnInit(): void {
   this.companies$  =this.companiesService.getCompanies();
  }

  submit(){
    this.companiesService.addCompany({...this.company}).subscribe({
    next: (response)=> {
      this.router.navigate(['admin/allCompanies']);  
    },
    error: (error)=> {
      alert(JSON.stringify(error));
    },
    complete: ()=> console.log('completed')
  });
    //navigate
  }
}

