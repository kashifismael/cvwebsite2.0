import { Component, OnInit } from '@angular/core';
import { CV } from '../models/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-staff-manage-cv-submitted',
  templateUrl: './staff-manage-cv-submitted.component.html',
  styleUrls: ['./staff-manage-cv-submitted.component.css']
})
export class StaffManageCvSubmittedComponent implements OnInit {

  submittedCvs: CV[] = [];

  constructor(private _cvService : CvService) { }

  async ngOnInit() {
    this.submittedCvs = await this._cvService.getAllSubmittedCVs();
  }

}
