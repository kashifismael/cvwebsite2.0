import { Component, OnInit } from '@angular/core';
import { CV } from '../models/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from '../models/feedback';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-staff-review-cv',
  templateUrl: './staff-review-cv.component.html',
  styleUrls: ['./staff-review-cv.component.css']
})
export class StaffReviewCvComponent implements OnInit {

  cv: CV = new CV();
  cvId: number = 0;
  feedback: Feedback = new Feedback();

  constructor(private _cvService : CvService,
    private _feedbackService : FeedbackService,
    private route : ActivatedRoute) { }

  async ngOnInit() {
    this.cvId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.cv = await this._cvService.getCvById(this.cvId);
    this.feedback.cvId = this.cvId;
    this.feedback.staffId = parseInt(localStorage.getItem("staffId"));
  }

  async submitFeedback(){
    //console.log(this.feedback);
    const addedFeedback = await this._feedbackService.saveFeedback(this.feedback);
    console.log(addedFeedback);
  }

}
