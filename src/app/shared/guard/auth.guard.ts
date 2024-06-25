import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
// import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    // public authService: AuthService,
    public router: Router,
    public fauth : FirebaseService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (this.fauth.isLoggedIn !== true) {
      this.router.navigate(['login']);
    }
    return true;
  }


  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
  //   if (this.authService.isLoggedIn !== true) {
  //     this.router.navigate(['sign-in']);
  //   }
  //   return true;
  // }
}
