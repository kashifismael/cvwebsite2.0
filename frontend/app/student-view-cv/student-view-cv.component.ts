import { Component, OnInit } from '@angular/core';
import { CV } from '../models/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-view-cv',
  templateUrl: './student-view-cv.component.html',
  styleUrls: ['./student-view-cv.component.css']
})
export class StudentViewCvComponent implements OnInit {

  cv: CV = new CV();
  
  constructor(private route: ActivatedRoute,
    private _cvService : CvService) { }

  async ngOnInit() {
    const cvId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.cv = await this._cvService.getCvById(cvId);
  }

}
