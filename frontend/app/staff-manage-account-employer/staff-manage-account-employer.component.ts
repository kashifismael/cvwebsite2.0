import { Component, OnInit } from '@angular/core';
import { IEmployer } from '../models/employer';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-staff-manage-account-employer',
  templateUrl: './staff-manage-account-employer.component.html',
  styleUrls: ['./staff-manage-account-employer.component.css']
})
export class StaffManageAccountEmployerComponent implements OnInit {

  unauthEmployers : IEmployer[] = [];
  isAuthorized: boolean = false;
  authEmployer = {
    companyName : '',
    accessExpiryDate : ''
  };


  constructor(private _userService : UserService) { }

  async ngOnInit() {
    this.unauthEmployers = await this._userService.getAllUnauthorisedEmployers();
    //console.log(this.unauthEmployers);
  }

  async authorizeEmployer(employer){
    console.log("authorize this employer", employer);
    let authorisedEmployer : IEmployer = await this._userService.authorizeEmployer(employer);
    console.log(authorisedEmployer);
    this.authEmployer.companyName = authorisedEmployer.companyName;
    this.authEmployer.accessExpiryDate = authorisedEmployer.accessExpiryDate;
    this.isAuthorized = true;
    this.removeEmployerFromTable(authorisedEmployer);
  }

  removeEmployerFromTable(employerToRemove : IEmployer){
    for(let i = 0; i < this.unauthEmployers.length; i++){
      if(this.unauthEmployers[i].id == employerToRemove.id){
        this.unauthEmployers.splice(i, 1);
      }
    }
  }

}
