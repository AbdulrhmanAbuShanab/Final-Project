import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { Company } from "src/app/lib/Interfaces/company";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";

@Component({
  selector: "app-companydetails",
  templateUrl: "./companydetails.component.html",
  styleUrls: ["./companydetails.component.css"],
})
export class CompanydetailsComponent {
  company?: Company;
  company$!: Observable<Company | undefined>;
  id!: string;
  constructor(
    private route: ActivatedRoute,
    private companyService: AdminFirebaseService
  ) {
    this.company$ = this.route.paramMap.pipe(
      switchMap((value) => {
        this.id = value.get("id") + "";
        return this.companyService.getCompanyById(this.id);
      })
    );
  }
}
