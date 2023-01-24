import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { Company } from 'src/app/lib/Interfaces/company';
import { AdminFirebaseService } from 'src/app/lib/services/admin-firebase.service';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent {
  company: Company = {
    city: '',
    companyName: '',
    email: '',
    founder: '',
    logo: '',
    numOfEmployees: 0,
    phone: '',
    sector: '',
    website: '',
    yearOfEstablishment: 0,
  };
  companies:Company[] = [];
  companies$? : Observable<Company[]>;
  sub?: Subscription;

  request?: Company;
  request$!: Observable<Company | undefined>;
  id!: string;
  constructor(private route: ActivatedRoute, 
    private requestService: AdminFirebaseService,
    private router: Router){

    this.request$ = this.route.paramMap.pipe(

      switchMap((value)=> {
        console.log(value);
        this.id = value.get('id')+'';
        return this.requestService.getRequestById(this.id)
      }

      )
    )
    
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  ngOnInit(): void {
   this.companies$  =this.requestService.getCompanies();
  }
  add(company: Company){
  this.requestService.addCompany(this.company).subscribe({
    next: (response)=> {
      this.router.navigate(['admin/allCompanies']);  
    },
    error: (error)=> {
      alert(JSON.stringify(error));
    },
    complete: ()=> console.log('completed')
  });
}
}
