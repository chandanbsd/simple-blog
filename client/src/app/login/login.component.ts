import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


interface UserLoginFormGroup {
  username: string | null;
  email: string | null;
  password: string | null;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  fg =  new FormGroup({
  });

}
