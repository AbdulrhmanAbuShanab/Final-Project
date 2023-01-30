import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/lib/services/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  isUser: boolean = false;
  
  constructor(private angularAuth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.angularAuth.user.subscribe((user) => {
      if (user) this.isUser = true;
      else this.isUser = false;
    });
  }
  //SignOut function
  signOut(){  
    this.angularAuth.signOut().then(()=>{
      this.router.navigate(['user/home']);
    })
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
