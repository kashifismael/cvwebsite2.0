import { Component, OnInit } from '@angular/core';
import { Feedback } from '../models/feedback';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { CV } from '../models/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-student-view-feedback',
  templateUrl: './student-view-feedback.component.html',
  styleUrls: ['./student-view-feedback.component.css']
})
export class StudentViewFeedbackComponent implements OnInit {

  cvId: number = 0;
  listOfFeedbacks: Feedback[];
  cv: CV = new CV();

  constructor(private route: ActivatedRoute,
    private _feedbackService: FeedbackService,
    private _cvService: CvService) { }

  async ngOnInit() {
    this.cvId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.listOfFeedbacks = await this._feedbackService.getAllFeedbacksByCvId(this.cvId);
    [this.cv, this.listOfFeedbacks] = await Promise.all([
      await this._cvService.getCvById(this.cvId),
      await this._feedbackService.getAllFeedbacksByCvId(this.cvId)
    ])
    //console.log(this.listOfFeedbacks);
  }

}
