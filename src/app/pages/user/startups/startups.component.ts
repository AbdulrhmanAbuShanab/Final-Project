import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { PageEvent } from "@angular/material/paginator";
import { Company } from "src/app/lib/Interfaces/company";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";

@Component({
  selector: "app-startups",
  templateUrl: "./startups.component.html",
  styleUrls: ["./startups.component.css"],
})
export class StartupsComponent {
  filters?: string;
  companies: Company[] = [];
  constructor(private companiesService: AdminFirebaseService, private af: AngularFirestore) {}
  ngOnInit(): void {
    this.getCompanies();


  }
  getCompanies() {
    this.companiesService.getCompanies().subscribe((response) => {
      this.companies = response;
    });
  }
  filter(){
    this.companiesService.getCompanies()
  }
}
