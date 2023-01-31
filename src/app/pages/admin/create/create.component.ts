import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";
import { Company } from "src/app/lib/Interfaces/company";
import { FilestorageService } from "src/app/lib/services/storage/filestorage.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Sector } from "src/app/lib/Interfaces/sector";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
})
export class CreateComponent {
  createCompany = new FormGroup({
    companyName: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    founder: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
    sector: new FormControl("", [Validators.required]),
    logo: new FormControl("", [Validators.required]),
    website: new FormControl("", [Validators.required]),
    numOfEmployees: new FormControl<number | "">("", [
      Validators.required,
      Validators.min(1),
    ]),
    yearOfEstablishment: new FormControl<number | "">("", [
      Validators.required,
      Validators.min(1),
    ]),
  });
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
  sectors: Sector[] = [];
  downloadUrl?: string;
  showSuccessAlert: boolean = false;
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
    this.getSectors();
  }
  //Getting sectors to display them in the select options
  getSectors() {
    this.companiesService.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  //Submiting the request
  submit() {
      this.companiesService.addCompany(
        {...this.createCompany.value as Company}
      ).subscribe({
        next: (response)=> {
          this.onSubmit();
        },
        error: (error)=> {  
          alert(JSON.stringify(error));
        },
        complete: ()=> console.log('completed')
      });
        //navigate
      }
  //Showing success alert
  onSubmit() {
    this.showSuccessAlert = true;
    setTimeout(() => {
      this.showSuccessAlert = false;
    }, 2000);
    setTimeout(() => {
      this.router.navigate(["admin/allcompanies"]);
    }, 3000);
  }
  //Uploading image to firestorage
  upload(event: Event) {
    let file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.storage.uploadStartupLogo(file).subscribe((value) => {
       this.downloadUrl=value;
       console.log(value);
       console.log(this.createCompany.controls.logo.value);
       this.createCompany.controls.logo.setValue(value);
      });
    }
  }
}
