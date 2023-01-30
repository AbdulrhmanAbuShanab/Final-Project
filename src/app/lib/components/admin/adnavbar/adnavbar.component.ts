import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/lib/services/auth/auth.service";

@Component({
  selector: "app-adnavbar",
  templateUrl: "./adnavbar.component.html",
  styleUrls: ["./adnavbar.component.css"],
})
export class AdnavbarComponent {
  isUser: boolean = false;
  navbar = false;
  buttonC = false;

  constructor(private angularAuth: AuthService, private router: Router) {}
  //Checking if it user or admin
  ngOnInit(): void {
    this.angularAuth.user.subscribe((user) => {
      if (user) this.isUser = true;
      else this.isUser = false;
    });
  }
  //SignOut function
  signOut() {
    this.angularAuth.signOut().then(() => {
      this.router.navigate(["user/home"]);
    });
  }
  @HostListener("document:scroll")
  scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbar = true;
      this.buttonC = true;
    } else {
      this.navbar = false;
      this.buttonC = false;
    }
  }

  scroll() {
    window.scrollTo(0, 0);
  }
}
