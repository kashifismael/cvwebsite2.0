import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'staff-navbar',
  templateUrl: './staff-navbar.component.html',
  styleUrls: ['./staff-navbar.component.css']
})
export class StaffNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("");
  }

}
