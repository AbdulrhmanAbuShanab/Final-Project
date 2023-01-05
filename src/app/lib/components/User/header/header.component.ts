import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/lib/services/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUser: boolean = false
  constructor(private angularAuth: AuthService){
  }
  ngOnInit(): void {
    this.angularAuth.user.subscribe(user=>{
      if(user) this.isUser = true;
      else this.isUser = false;
    })
  }
}
