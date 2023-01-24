import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/lib/services/auth/auth.service";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isUser: boolean = false;
  constructor(private angularAuth: AuthService) {}
  ngOnInit(): void {
    this.angularAuth.user.subscribe((user) => {
      if (user) this.isUser = true;
      else this.isUser = false;
    });
  }
  header = false;
  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header = true;
    }
    else{
      this.header = false;
    }
  }
}
