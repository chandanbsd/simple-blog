import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, NavbarComponent, RouterModule],
  standalone: true
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
