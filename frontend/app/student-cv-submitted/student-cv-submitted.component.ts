import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-student-cv-submitted',
  templateUrl: './student-cv-submitted.component.html',
  styleUrls: ['./student-cv-submitted.component.css']
})
export class StudentCvSubmittedComponent implements OnInit {

  allCVs = [];
  studentId: number;
  
  constructor(private _cvService : CvService) { }

  async ngOnInit() {
    this.studentId = parseInt(localStorage.getItem("studentId"));
    this.allCVs = await this._cvService.getCVs("submitted", this.studentId);
  }

}
