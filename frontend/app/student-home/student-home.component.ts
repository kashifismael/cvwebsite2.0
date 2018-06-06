import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { StudentNavbarComponent } from '../student-navbar/student-navbar.component'

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  
  constructor() { }

  ngOnInit() {
    this.firstName = localStorage.getItem("userFirstName");
    this.lastName = localStorage.getItem("userLastName");
  }


}
