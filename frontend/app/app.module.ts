import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app-routing.module'
import { LoginPageComponent } from './login-page/login-page.component';


import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { StudentHomeComponent } from './student-home/student-home.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { UserService } from './services/user.service';
import { CvService } from './services/cv.service';
import { StudentCvTabsComponent } from './student-cv-tabs/student-cv-tabs.component';
import { StudentCvAllComponent } from './student-cv-all/student-cv-all.component';
import { StudentCvSavedComponent } from './student-cv-saved/student-cv-saved.component';
import { StudentCvSubmittedComponent } from './student-cv-submitted/student-cv-submitted.component';
import { StudentCvRecFeedbackComponent } from './student-cv-rec-feedback/student-cv-rec-feedback.component';
import { StudentCvCompletedComponent } from './student-cv-completed/student-cv-completed.component';
import { StudentCreateCvComponent } from './student-create-cv/student-create-cv.component';
import { StudentViewCvComponent } from './student-view-cv/student-view-cv.component';
import { StudentEditCvComponent } from './student-edit-cv/student-edit-cv.component';
import { StaffNavbarComponent } from './staff-navbar/staff-navbar.component';
import { StaffManageCategoryComponent } from './staff-manage-category/staff-manage-category.component';
import { StaffCvTabsComponent } from './staff-cv-tabs/staff-cv-tabs.component';
import { StaffManageCvSubmittedComponent } from './staff-manage-cv-submitted/staff-manage-cv-submitted.component';
import { StaffManageCvAllComponent } from './staff-manage-cv-all/staff-manage-cv-all.component';
import { StaffFeedbackTabsComponent } from './staff-feedback-tabs/staff-feedback-tabs.component';
import { StaffReviewCvComponent } from './staff-review-cv/staff-review-cv.component';
import { StaffReviewFeedbackComponent } from './staff-review-feedback/staff-review-feedback.component';
import { StudentViewFeedbackComponent } from './student-view-feedback/student-view-feedback.component';
import { StaffManageAccountTabsComponent } from './staff-manage-account-tabs/staff-manage-account-tabs.component';
import { StaffManageAccountStaffComponent } from './staff-manage-account-staff/staff-manage-account-staff.component';
import { StaffManageAccountEmployerComponent } from './staff-manage-account-employer/staff-manage-account-employer.component';
import { RegisterEmployerComponent } from './register-employer/register-employer.component';
import { EmployerNavbarComponent } from './employer-navbar/employer-navbar.component';
import { EmployerSearchCvComponent } from './employer-search-cv/employer-search-cv.component';
import { EmployerViewCvComponent } from './employer-view-cv/employer-view-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StudentHomeComponent,
    StaffHomeComponent,
    EmployerHomeComponent,
    StudentNavbarComponent,
    StudentCvTabsComponent,
    StudentCvAllComponent,
    StudentCvSavedComponent,
    StudentCvSubmittedComponent,
    StudentCvRecFeedbackComponent,
    StudentCvCompletedComponent,
    StudentCreateCvComponent,
    StudentViewCvComponent,
    StudentEditCvComponent,
    StaffNavbarComponent,
    StaffManageCategoryComponent,
    StaffCvTabsComponent,
    StaffManageCvSubmittedComponent,
    StaffManageCvAllComponent,
    StaffFeedbackTabsComponent,
    StaffReviewCvComponent,
    StaffReviewFeedbackComponent,
    StudentViewFeedbackComponent,
    StaffManageAccountTabsComponent,
    StaffManageAccountStaffComponent,
    StaffManageAccountEmployerComponent,
    RegisterEmployerComponent,
    EmployerNavbarComponent,
    EmployerSearchCvComponent,
    EmployerViewCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
   // UserService,
   // CvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
