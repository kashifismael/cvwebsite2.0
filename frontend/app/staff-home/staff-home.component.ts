import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-home',
  templateUrl: './staff-home.component.html',
  styleUrls: ['./staff-home.component.css']
})
export class StaffHomeComponent implements OnInit {
  
  public firstName: string;
  public lastName: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.firstName = localStorage.getItem("userFirstName");
    this.lastName = localStorage.getItem("userLastName");
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("");
  }

}
