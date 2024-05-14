import { Injectable, inject, signal } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { Observable, Subject, from } from 'rxjs';
import { UserInterface } from '../../interfaces/user.interface';
import { User } from '../../models/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserState$ = new Subject();
  currentUserSig = signal<UserInterface | null | undefined>(undefined);
  currentLoggedinUser = new User();
  router = inject(Router);


  getCurrentUserState() {
      onAuthStateChanged(this.firebaseAuth, user => {
        if(user) {
          this.currentLoggedinUser.loggedIn = true;
          this.currentLoggedinUser.username = user.displayName!;
          this.currentLoggedinUser.email = user.email!;
          console.log(this.currentLoggedinUser);
          console.log('user object: ', user);
          
        } else {
          this.router.navigateByUrl('');
          this.currentLoggedinUser.loggedIn = false;
          console.log('logged out');
          
        }
      })
  }

  register(email: string, username: string, password: string):Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
    .then(response => updateProfile(response.user, {displayName: username}))

    return from(promise)
  }

  login(email:string, password:string):Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth,email, password)
    .then(() => {})
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);
    return from(promise);
  }
  
}
