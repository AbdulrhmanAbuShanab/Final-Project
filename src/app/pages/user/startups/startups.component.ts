import { Component } from "@angular/core";
import { Company } from "src/app/lib/Interfaces/company";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";

@Component({
  selector: "app-startups",
  templateUrl: "./startups.component.html",
  styleUrls: ["./startups.component.css"],
})
export class StartupsComponent {
  companies: Company[] = [];
  companies2: Company[] = [];
  constructor(
    private companiesService: AdminFirebaseService,
  ) {}
  ngOnInit(): void {
    this.getCompanies();
  }
  getCompanies() {
    this.companiesService.getCompanies().subscribe((response) => {
      this.companies = response;
      this.companies2 = response;
    });
  }

  searchCompanies(se: string) {
    this.companies = this.companies2;
    this.companies = this.companies.filter((x) => x.companyName.includes(se));
  }

  filterCompanies(event: any) {
    this.companies = this.companies2;
    this.companies = this.companies.filter((x) =>
      x.sector.includes(event.value)
    );
  }
}
