import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-student-cv-completed',
  templateUrl: './student-cv-completed.component.html',
  styleUrls: ['./student-cv-completed.component.css']
})
export class StudentCvCompletedComponent implements OnInit {

  allCVs = [];
  studentId: number;
  
  constructor(private _cvService : CvService) { }

  async ngOnInit() {
    this.studentId = parseInt(localStorage.getItem("studentId"));
    this.allCVs = await this._cvService.getCVs("completed", this.studentId);
  }

}
