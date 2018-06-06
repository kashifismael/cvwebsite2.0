import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './httpOptions';
import { IUser } from '../models/user';
import { Observable } from 'rxjs';
import { IStudent } from '../models/student';
import { IStaff } from '../models/staff';
import { IEmployer } from '../models/employer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authenticateUser(user: Object): Promise<IUser> {
    return this.http.post<IUser>("http://localhost:3000/authenticate",
      JSON.stringify(user), httpOptions).toPromise();
  }

  getStudentDetails(userId: number): Promise<IStudent> {
    return this.http.get<IStudent>(`http://localhost:3000/students/${userId}`).toPromise()
  }

  getStaffDetails(userId: number): Promise<IStaff> {
    return this.http.get<IStaff>(`http://localhost:3000/staff/${userId}`).toPromise();
  }

  registerStaff(staff: Object): Promise<IStaff> {
    return this.http.post<IStaff>("http://localhost:3000/staff", JSON.stringify(staff), httpOptions).toPromise();
  }

  registerEmployer(employer: Object): Promise<IEmployer> {
    return this.http.post<IEmployer>("http://localhost:3000/employers", JSON.stringify(employer), httpOptions).toPromise();
  }

  getAllUnauthorisedEmployers(): Promise<IEmployer[]> {
    return this.http.get<IEmployer[]>("http://localhost:3000/employers").toPromise();
  }

  authorizeEmployer(employer: IEmployer): Promise<IEmployer> {
    return this.http.put<IEmployer>(`http://localhost:3000/employers/authorize/${employer.id}`, JSON.stringify(employer), httpOptions).toPromise();
  }

  authenticateEmployer(employer: IUser): Promise<IEmployer> {
    return this.http.get<IEmployer>(`http://localhost:3000/employers/${employer.id}`).toPromise();
  }

}
