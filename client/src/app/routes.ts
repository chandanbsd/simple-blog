import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: AppComponent},
  { path: 'signup', component: AppComponent}
];
