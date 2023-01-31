import { Component, Inject, ViewChild } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { NgForm } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Observable, Subscription, switchMap, take } from "rxjs";
import { Company } from "src/app/lib/Interfaces/company";
import { Sector } from "src/app/lib/Interfaces/sector";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";
import { FilestorageService } from "src/app/lib/services/storage/filestorage.service";

@Component({
  selector: "app-accept",
  templateUrl: "./accept.component.html",
  styleUrls: ["./accept.component.css"],
})
export class AcceptComponent {
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
  @ViewChild("form") form?: NgForm;
  companies: Company[] = [];
  // companies$? : Observable<Company[]>;
  sub?: Subscription;
  request!: Company;
  request$?: Observable<Company | undefined>;
  id!: string;
  sectors: Sector[] = [];
  downloadUrl?: string;
  showSuccessAlert: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private requestService: AdminFirebaseService,
    private router: Router,
    private storage: FilestorageService
  ) {
    this.request$ = this.route.paramMap.pipe(
      switchMap((value) => {
        this.id = value.get("id") + "";
        return this.requestService.getRequestById(this.id);
      })
    );
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  ngOnInit(): void {
    // //  this.companies$ = this.requestService.getCompanies();
    this.request$?.pipe().subscribe((value) => {
      (this.company.companyName = value?.companyName);
      (this.company.city = value?.city);
      (this.company.email = value?.email);
      (this.company.founder = value?.founder);
      (this.company.logo = value?.logo);
      (this.company.numOfEmployees = value?.numOfEmployees);
      (this.company.phone = value?.phone);
      (this.company.sector = value?.sector);
      (this.company.website = value?.website);
      (this.company.yearOfEstablishment = value?.yearOfEstablishment);
    });
    console.log(this.company);
    console.log(this.id);
    this.getSectors();
  }
  //Getting sectors to display them in the select options
  getSectors() {
    this.requestService.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  //
  submit() {
    debugger
    this.requestService.addCompany(this.company).subscribe({
      next: (response) => {
        this.successAlert();
      },
      error: (error) => {
        alert(JSON.stringify(error));
      },
      complete: () => console.log("completed"),
    });

  }
  //Showing success alert
  successAlert() {
    this.showSuccessAlert = true;
    setTimeout(() => {
      this.showSuccessAlert = false;
    }, 1250);
    setTimeout(() => {
      this.remove();
    }, 1500);
    setTimeout(() => {
      this.router.navigate(["admin/allcompanies"]);
    }, 1750);
  }
  //delete company
  remove() {
    this.requestService.removeRequest(this.id).subscribe((_) => {
    });
  }
  // Uploading image to firestorage
  upload(event: Event) {
    let file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.storage.uploadStartupLogo(file).subscribe((value) => {
        this.downloadUrl = value;        
        this.form?.controls["logo"].setValue(this.downloadUrl);
      });
    }
  }
}
