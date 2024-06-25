import { Component } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(public fauth: FirebaseService) { }

}
