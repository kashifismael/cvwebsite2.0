import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';
import { IStudent } from '../models/student';
import { Router } from '@angular/router';
import { IEmployer } from '../models/employer';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public emailAddress: String;
  public password: String;
  public isAuthenticated: boolean = false;
  public deniedAccess: boolean = false;

  constructor(private _userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  async logIntoSystem() {
    const user = { emailAddress: this.emailAddress, password: this.password }
    const authUser = await this._userService.authenticateUser(user);
    console.log(authUser);
    if (authUser.message === "User authenticated" && authUser.userType != "Employer") {
      this.saveUserDetails(authUser);
      this.redirectUser(authUser);
    } else if (authUser.message === "User authenticated" && authUser.userType == "Employer") {
      const employer = await this._userService.authenticateEmployer(authUser);
      if (this.employerIsAuthenticated(employer)) {
        this.saveUserDetails(authUser);
        this.redirectUser(authUser);
      }
    } else {
      this.deniedAccess = true;
    }
  }

  employerIsAuthenticated(employer: IEmployer): boolean {
    let isAuthorised = false;
    const empExpiryDate = new Date(employer.accessExpiryDate);
    if (employer.isAuthorized && empExpiryDate > new Date()) {
      isAuthorised = true;
    } else {
      console.log("employer is not authorised");//employer not authorised
    }
    return isAuthorised;
  }

  saveUserDetails(authUser: IUser) {
    localStorage.setItem("userId", authUser.id.toString());
    localStorage.setItem("userFirstName", authUser.firstName);
    localStorage.setItem("userLastName", authUser.lastName);
    localStorage.setItem("userType", authUser.userType);
  }

  async redirectUser(user: IUser) {
    if (user.userType == "Student") {

      const student = await this._userService.getStudentDetails(user.id)
      console.log(student);
      localStorage.setItem("studentId", student.id.toString());
      this.router.navigateByUrl("/student");

    } else if (user.userType == "Staff") {

      const staff = await this._userService.getStaffDetails(user.id);
      console.log(staff);
      localStorage.setItem("staffId", staff.id.toString());
      this.router.navigateByUrl("/staff");

    } else if (user.userType == "Employer") {
      this.router.navigateByUrl("/employer");
    }
  }

}
