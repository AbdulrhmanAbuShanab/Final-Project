import { Component } from "@angular/core";
import { Company } from "src/app/lib/Interfaces/company";
import { Sector } from "src/app/lib/Interfaces/sector";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";

@Component({
  selector: "app-startups",
  templateUrl: "./startups.component.html",
  styleUrls: ["./startups.component.css"],
})
export class StartupsComponent {
  companies: Company[] = [];
  companies2: Company[] = [];
  sectors: Sector[] = [];
  constructor(
    private companiesService: AdminFirebaseService,
  ) {}
  ngOnInit(): void {
    this.getCompanies();
    this.getSectors();
  }
  getCompanies() {
    this.companiesService.getCompanies().subscribe((response) => {
      this.companies = response;
      this.companies2 = response;
    });
  }
  //Getting sectors to display them in the select options
  getSectors() {
    this.companiesService.getSectors().subscribe((response) => {
      this.sectors = response;
    });
  }
  //Search function
  searchCompanies(se: string) {
    this.companies = this.companies2;
    this.companies = this.companies.filter((x) => x.companyName?.includes(se));
  }
  //Filter function
  filterCompanies(event: any) {
    this.companies = this.companies2;
    this.companies = this.companies.filter((x) =>
      x.sector?.includes(event.value)
    );
  }
}
