import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-home',
  templateUrl: './employer-home.component.html',
  styleUrls: ['./employer-home.component.css']
})
export class EmployerHomeComponent implements OnInit {

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
