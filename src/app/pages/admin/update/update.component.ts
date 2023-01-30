import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AdminFirebaseService } from 'src/app/lib/services/admin-firebase.service';
import { Company } from 'src/app/lib/Interfaces/company';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  company?: Company;
  company$!: Observable<Company | undefined>;
  id!: string;
  constructor(private route: ActivatedRoute, 
    private companyService: AdminFirebaseService,
    private router: Router){

    this.company$ = this.route.paramMap.pipe(

      switchMap((value)=> {
        this.id = value.get('id')+'';
        return this.companyService.getCompanyById(this.id)
      }

      )
    )
    
  }
  deleteCompany(company: any){
    this.companyService.updateCompany(this.id, company);
    this.router.navigate(['admin/allcompanies']);
  }
}
