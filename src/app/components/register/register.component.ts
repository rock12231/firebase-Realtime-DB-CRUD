import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../shared/services/firebase.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(public fauth: FirebaseService) {  }


}
