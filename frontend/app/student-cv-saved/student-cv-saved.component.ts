import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-student-cv-saved',
  templateUrl: './student-cv-saved.component.html',
  styleUrls: ['./student-cv-saved.component.css']
})
export class StudentCvSavedComponent implements OnInit {

  allCVs = [];
  studentId: number;
  
  constructor(private _cvService : CvService) { }

  async ngOnInit() {
    this.studentId = parseInt(localStorage.getItem("studentId"));
    this.allCVs = await this._cvService.getCVs("saved", this.studentId);
  }

}
