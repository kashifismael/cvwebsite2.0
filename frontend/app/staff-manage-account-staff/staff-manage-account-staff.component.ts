import { Component, OnInit } from '@angular/core';
import { IStaff } from '../models/staff';
import { UserService } from '../services/user.service';
//import { IUser } from '../models/user';

@Component({
  selector: 'app-staff-manage-account-staff',
  templateUrl: './staff-manage-account-staff.component.html',
  styleUrls: ['./staff-manage-account-staff.component.css']
})
export class StaffManageAccountStaffComponent implements OnInit {

  newStaff = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  };
  
  constructor(private _userService : UserService) { }

  ngOnInit() {
  }

  async registerStaff(){
    //console.log(this.newStaff);
    const addedStaff = await this._userService.registerStaff(this.newStaff);
    console.log(addedStaff);
  }

}
