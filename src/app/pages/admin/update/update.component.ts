import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";
import { Company } from "src/app/lib/Interfaces/company";
import { FilestorageService } from "src/app/lib/services/storage/filestorage.service";
import { Sector } from "src/app/lib/Interfaces/sector";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"],
})
export class UpdateComponent {
  @ViewChild("form") form?: NgForm;
  company?: Company;
  company$!: Observable<Company | undefined>;
  id!: string;
  sectors: Sector[] = [];
  downloadUrl?: string;
  showSuccessAlert: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private companiesService: AdminFirebaseService,
    private router: Router,
    private storage: FilestorageService
  ) {
    this.company$ = this.route.paramMap.pipe(
      switchMap((value) => {
        this.id = value.get("id") + "";
        return this.companiesService.getCompanyById(this.id);
      })
    );
  }
  ngOnInit(): void {
    this.getSectors();
  }
  //Getting sectors to display them in the select options
  getSectors() {
    this.companiesService.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  deleteCompany(company: any) {
    this.companiesService.updateCompany(this.id, company);
  }
  //Showing success alert
  onSubmit() {
    this.showSuccessAlert = true;
    setTimeout(() => {
      this.showSuccessAlert = false;
    }, 1250);
    setTimeout(() => {
      this.router.navigate(["admin/allcompanies"]);
    }, 1750);
  }
  //Uploading image to firestorage
  upload(event: Event) {
    let file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.storage.uploadStartupLogo(file).subscribe((value) => {
        this.downloadUrl = value;
        console.log(value);
        console.log(this.form?.controls["logo"].value as string);
        setTimeout(() => {
          this.form?.controls["logo"].setValue(this.downloadUrl);
        }, 100);
      });
    }
  }
}
