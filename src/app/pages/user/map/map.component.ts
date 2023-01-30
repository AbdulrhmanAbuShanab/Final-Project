import { Component } from "@angular/core";
import { Company } from "src/app/lib/Interfaces/company";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent {
  companies: Company[] = [];
  groupedValues = [];
  groupedKeys: string[] = [];
  constructor(private companiesService: AdminFirebaseService) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companiesService.getCompanies().subscribe((response) => {
      this.companies = response;
      var groupedCompanies = this.companies.reduce((arr: any, currentItem) => {
        let key = currentItem.sector;
        if (!arr[key]) {
          arr[key] = [];
        }
        arr[key].push(currentItem);
        return arr;
      }, {});
      this.groupedValues = Object.values(groupedCompanies);
      this.groupedKeys = Object.keys(groupedCompanies);
      console.log(this.groupedValues);
      console.log(this.groupedKeys);
    });
  }
}
