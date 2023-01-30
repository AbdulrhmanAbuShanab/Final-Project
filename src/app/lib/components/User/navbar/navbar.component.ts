import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navbar = false;
  buttonC = false;
  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbar = true;
      this.buttonC = true;
    }
    else{
      this.navbar = false;
      this.buttonC = false;
    }
  }

  scroll() {
        window.scrollTo(0,0);
  }
}

