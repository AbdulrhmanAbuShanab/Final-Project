import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.default.User|null>
  userState$ = this.angularFireAuth.authState;
  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.user
  }

  signIn(email:string, password:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, password) 
  }

  signOut(){
    return this.angularFireAuth.signOut()
  }

}
