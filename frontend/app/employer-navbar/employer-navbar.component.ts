import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'employer-navbar',
  templateUrl: './employer-navbar.component.html',
  styleUrls: ['./employer-navbar.component.css']
})
export class EmployerNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("");
  }

}
