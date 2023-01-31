import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { Company } from "src/app/lib/Interfaces/company";
import { Sector } from "src/app/lib/Interfaces/sector";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";
import { FilestorageService } from "src/app/lib/services/storage/filestorage.service";

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.css"],
})
export class RequestComponent {
  requestForm = new FormGroup({
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
  request: Company = {
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
  requests: Company[] = [];
  requests$?: Observable<Company[]>;
  sub?: Subscription;
  sectors: Sector[] = [];
  downloadUrl?: string;
  showSuccessAlert: boolean = false;
  constructor(
    private requestService: AdminFirebaseService,
    private router: Router,
    private storage: FilestorageService
  ) {}
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  //Getting all companies
  ngOnInit(): void {
    this.requests$ = this.requestService.getRequests();
    this.getSectors();
  }
  //Getting sectors to display them in the select options
  getSectors() {
    this.requestService.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  //Submiting the request
  submit() {
    this.requestService.acceptRequest({
      ...(this.requestForm.value as Company),
    });
  }
  //Showing success alert 
  onSubmit() {
    this.showSuccessAlert = true;
    setTimeout(() => {
      this.showSuccessAlert = false;
    }, 1500);
    setTimeout(() => {
      this.router.navigate(["user/home"]);
    }, 2000);
  }
  //uploading the logo
  upload(event: Event) {
    let file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.storage.uploadStartupLogo(file).subscribe((value) => {
        this.downloadUrl = value;
        this.requestForm.controls.logo.setValue(value);

      });
    }
  }
}
