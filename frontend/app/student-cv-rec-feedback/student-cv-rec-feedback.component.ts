import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-student-cv-rec-feedback',
  templateUrl: './student-cv-rec-feedback.component.html',
  styleUrls: ['./student-cv-rec-feedback.component.css']
})
export class StudentCvRecFeedbackComponent implements OnInit {

  allCVs = [];
  studentId: number;
  
  constructor(private _cvService : CvService) { }

  async ngOnInit() {
    this.studentId = parseInt(localStorage.getItem("studentId"));
    this.allCVs = await this._cvService.getCVs("feedbackrecieved", this.studentId);
  }

}
