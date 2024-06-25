import { Component } from '@angular/core';
import { FirebaseService } from '../../shared/services/firebase.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

  constructor(public fauth: FirebaseService) { }

}
