import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-student-navbar',
  selector: 'student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("");
  }

  createCV(){
    this.router.navigateByUrl("create-cv");
  }

}
