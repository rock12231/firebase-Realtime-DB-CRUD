import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../shared/services/firebase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public fauth: FirebaseService) { }

  // logInWithGoogle() {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(this.auth, provider)
  //     .then((result) => {
  //       console.log('Signed in successfully', result.user);
  //     })
  //     .catch((error) => {
  //       console.error('Error signing in', error);
  //     });
  // }

  // logInWithEmailPass(email: string, password: string) {
  //   signInWithEmailAndPassword(this.auth, email, password)
  //     .then((userCredential) => {
  //       console.log('Signed in successfully', userCredential.user);
  //     })
  //     .catch((error) => {
  //       console.error('Error signing in', error);
  //     });
  //   console.log('Email: ', email);
  //   }

 

}
