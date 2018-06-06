import { Component, OnInit } from '@angular/core';
import { CV } from '../models/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-staff-manage-cv-all',
  templateUrl: './staff-manage-cv-all.component.html',
  styleUrls: ['./staff-manage-cv-all.component.css']
})
export class StaffManageCvAllComponent implements OnInit {

  allCVs: CV[] = [];
  
  constructor(private _cvService : CvService) { }

  async ngOnInit() {
    this.allCVs = await this._cvService.getAllCVs();
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
