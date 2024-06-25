import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NgModule } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'test', component: TestComponent},
  { path: 'new', component: AuthenticationComponent},

  // { path: '', component: DashboardComponent, canActivate: [AuthGuard],
    // children: [{ path: 'feed', component: HackpostComponent, canActivate: [AuthGuard] },]
  // },
  { path: 'dash-board', component: DashBoardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  // { path: 'sign-in', component: SignInComponent },
  // { path: 'register-user', component: SignUpComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: 'verify-email-address', component: VerifyEmailComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }