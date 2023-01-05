import { Component, OnInit } from '@angular/core';
import { AuthService } from './lib/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Final-Project';
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


