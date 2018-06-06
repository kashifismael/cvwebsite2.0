import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from './login-page/login-page.component'
import { StudentHomeComponent } from './student-home/student-home.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { StudentCvAllComponent } from './student-cv-all/student-cv-all.component';
import { StudentCvSavedComponent } from './student-cv-saved/student-cv-saved.component';
import { StudentCvSubmittedComponent } from './student-cv-submitted/student-cv-submitted.component';
import { StudentCvRecFeedbackComponent } from './student-cv-rec-feedback/student-cv-rec-feedback.component';
import { StudentCvCompletedComponent } from './/student-cv-completed/student-cv-completed.component';
import { StudentCreateCvComponent } from './student-create-cv/student-create-cv.component';
import { StudentViewCvComponent } from './student-view-cv/student-view-cv.component';
import { StudentEditCvComponent } from './student-edit-cv/student-edit-cv.component';
import { StaffManageCategoryComponent } from './staff-manage-category/staff-manage-category.component';
import { StaffManageCvAllComponent } from './staff-manage-cv-all/staff-manage-cv-all.component';
import { StaffManageCvSubmittedComponent } from './staff-manage-cv-submitted/staff-manage-cv-submitted.component';
import { StaffReviewCvComponent } from './staff-review-cv/staff-review-cv.component';
import { StaffReviewFeedbackComponent } from './staff-review-feedback/staff-review-feedback.component';
import { StudentViewFeedbackComponent } from './student-view-feedback/student-view-feedback.component';
import { StaffManageAccountStaffComponent } from './staff-manage-account-staff/staff-manage-account-staff.component';
import { StaffManageAccountEmployerComponent } from './staff-manage-account-employer/staff-manage-account-employer.component';
import { RegisterEmployerComponent } from './register-employer/register-employer.component';
import { EmployerSearchCvComponent } from './employer-search-cv/employer-search-cv.component';
import { EmployerViewCvComponent } from './employer-view-cv/employer-view-cv.component';

const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'register-employer', component: RegisterEmployerComponent},
    { path: 'student', component: StudentHomeComponent },
    { path: 'manage-cv/all', component: StudentCvAllComponent },
    { path: 'manage-cv/saved', component: StudentCvSavedComponent },
    { path: 'manage-cv/submitted', component: StudentCvSubmittedComponent },
    { path: 'manage-cv/recieved-feedback', component: StudentCvRecFeedbackComponent },
    { path: 'manage-cv/completed', component: StudentCvCompletedComponent },
    { path: 'create-cv', component: StudentCreateCvComponent },
    { path: 'view-cv/:id', component: StudentViewCvComponent },
    { path: 'edit-cv/:id', component: StudentEditCvComponent },
    { path: 'view-feedback/:id', component: StudentViewFeedbackComponent },
    { path: 'staff', component: StaffHomeComponent },
    { path: 'manage-category', component: StaffManageCategoryComponent },
    { path: 'manage-feedback/all', component: StaffManageCvAllComponent },
    { path: 'manage-feedback/submitted', component: StaffManageCvSubmittedComponent},
    { path: 'manage-account/staff', component: StaffManageAccountStaffComponent},
    { path: 'manage-account/employers', component: StaffManageAccountEmployerComponent},
    { path: 'review-cv/:id', component: StaffReviewCvComponent},
    { path: 'review-feedback/:id', component: StaffReviewFeedbackComponent},
    { path: 'employer', component: EmployerHomeComponent },
    { path: 'search-cv', component: EmployerSearchCvComponent},
    { path: 'employer-view-cv/:id', component: EmployerViewCvComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
    LoginPageComponent,
    RegisterEmployerComponent,
    StudentHomeComponent,
    StudentCvAllComponent,
    StudentCvSavedComponent,
    StudentCvSubmittedComponent,
    StudentCvRecFeedbackComponent,
    StudentCvCompletedComponent,
    StudentCreateCvComponent,
    StudentViewCvComponent,
    StudentEditCvComponent,
    StudentViewFeedbackComponent,
    StaffHomeComponent,
    StaffManageCategoryComponent,
    StaffManageCvAllComponent,
    StaffManageCvSubmittedComponent,
    StaffManageAccountStaffComponent,
    StaffManageAccountEmployerComponent,
    StaffReviewCvComponent,
    StaffReviewFeedbackComponent,
    EmployerHomeComponent,
    EmployerSearchCvComponent,
    EmployerViewCvComponent
]