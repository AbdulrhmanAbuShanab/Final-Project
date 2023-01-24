import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";
import { Company } from "src/app/lib/Interfaces/company";
import { FilestorageService } from "src/app/lib/services/storage/filestorage.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
})
export class CreateComponent {
  company: Company = {
    city: "",
    companyName: "",
    email: "",
    founder: "",
    logo: "",
    numOfEmployees: 0,
    phone: "",
    sector: "",
    website: "",
    yearOfEstablishment: 0,
  };
  companies: Company[] = [];
  companies$?: Observable<Company[]>;
  sub?: Subscription;
  downloadUrl?: string;
  constructor(
    private storage: FilestorageService,
    private companiesService: AdminFirebaseService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  ngOnInit(): void {
    this.companies$ = this.companiesService.getCompanies();
  }

  submit() {
    this.companiesService.addCompany(this.company).subscribe({
      next: (response) => {
        this.router.navigate(["admin/allcompanies"]);
      },
      error: (error) => {
        alert(JSON.stringify(error));
      },
      complete: () => console.log("completed"),
    });
    //navigate
  }

  upload(event: Event) {
    let file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.storage.uploadFile(file).subscribe((value) => {
        this.downloadUrl = value;
        this.company.logo = value;
      });
    }
  }
}
