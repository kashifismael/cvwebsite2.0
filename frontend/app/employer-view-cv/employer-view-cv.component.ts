import { Component, OnInit } from '@angular/core';
import { CV } from '../models/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employer-view-cv',
  templateUrl: './employer-view-cv.component.html',
  styleUrls: ['./employer-view-cv.component.css']
})
export class EmployerViewCvComponent implements OnInit {

  cv: CV = new CV();
  cvId: number = 0;
  
  constructor(private _cvService : CvService,
    private route : ActivatedRoute) { }

  async ngOnInit() {
    this.cvId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.cv = await this._cvService.getCvById(this.cvId);
  }

}
