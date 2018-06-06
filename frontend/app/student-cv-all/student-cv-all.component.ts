import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { CV } from '../models/cv';

@Component({
  selector: 'app-student-cv-all',
  templateUrl: './student-cv-all.component.html',
  styleUrls: ['./student-cv-all.component.css']
})
export class StudentCvAllComponent implements OnInit {

  allCVs = [];
  studentId: number;

  constructor(private _cvService : CvService) { }

  async ngOnInit() {
    //console.log(`Hello ${localStorage.getItem('userFirstName')} with an student id of ${localStorage.getItem('studentId')}`)
    this.studentId = parseInt(localStorage.getItem("studentId"));
    this.allCVs = await this._cvService.getCVs("all", this.studentId);
  }

  async deleteCV(cvToDelete){
    //console.log("cv to delete", cvToDelete);
    let deletedCV : CV = await this._cvService.deleteCV(cvToDelete.id)
    this.removeCvFromTable(deletedCV);
  }

  removeCvFromTable(cvToRemove : CV){
    for(let i = 0; i < this.allCVs.length; i++){
      if(this.allCVs[i].id == cvToRemove.id){
        this.allCVs.splice(i, 1);
      }
    }
  }

}
