import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userState$ = this.angularFireAuth.authState;
  constructor(private angularFireAuth: AngularFireAuth) {}

  signIn(email:string, password:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, password) 
  }
}
