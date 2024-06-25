import { Injectable } from '@angular/core';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth';
import { User } from '../services/user';
import { Router } from '@angular/router';
import { Database, ref, push, remove, update, onValue, set } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userData: any; // Save logged in user data
  
  constructor(
    private auth: Auth,    
    public router: Router,
    public db: Database
  ) 
  {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  logInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        this.SetUserData(result.user);
        this.router.navigate(['dash-board']);
        console.log('Signed in successfully', result.user);
      })
      .catch((error) => {
        console.error('Error signing in', error);
      });
  }

  logInWithEmailPassword(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        this.SetUserData(userCredential.user);
        // if (User) {
            this.router.navigate(['dash-board'])
          // }
        console.log('Signed in successfully', userCredential.user);
      })
      .catch((error) => {
        console.error('Error signing in', error);
      });
    }

  registerWithEmailPassword(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        this.SetUserData(userCredential.user);
        this.router.navigate(['dash-board']);
        console.log('Signed in successfully', userCredential.user);
      })
      .catch((error) => {
        console.error('Error signing in', error);
      });
  }

  forgotPassword(email: string) {
    sendPasswordResetEmail(this.auth, email)
      .then(() => {
        console.log('Password reset email sent');
      })
      .catch((error) => {
        console.error('Error sending password reset email', error);
      });
  }

  logot() {
    this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  SetUserData(user: any) {
    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(
    //   `users/${user.uid}`
    // );

    // const userRef = push(ref(this.db, 'users'), user.uid);
    
    const userRef = ref(this.db, `users/${user.uid}`);

    set(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    // set(userRef, {
    //   userData,
    //   merge: true,
    // });

  }


}
