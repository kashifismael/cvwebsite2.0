import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-employer',
  templateUrl: './register-employer.component.html',
  styleUrls: ['./register-employer.component.css']
})
export class RegisterEmployerComponent implements OnInit {

  newEmployer = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    telephoneNo: '',
    companyName: '',
    password: ''
  };
  
  constructor(private _userService : UserService) { }

  ngOnInit() {
  }

  async registerEmployer(){
    //console.log(this.newEmployer);
    const addedEmployer = await this._userService.registerEmployer(this.newEmployer)
    console.log(addedEmployer);
  }

}
