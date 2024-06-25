import { Component } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-tab.component.html',
  styleUrl: './nav-tab.component.css'
})
export class NavTabComponent {

  user: any;

  constructor(public fauth: FirebaseService) {}
   


}
