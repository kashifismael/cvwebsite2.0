import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/feedback';

@Component({
  selector: 'app-staff-review-feedback',
  templateUrl: './staff-review-feedback.component.html',
  styleUrls: ['./staff-review-feedback.component.css']
})
export class StaffReviewFeedbackComponent implements OnInit {

  cvId: number = 0;
  listOfFeedbacks : Feedback[];

  constructor(private route : ActivatedRoute,
    private _feedbackService : FeedbackService) { }

  async ngOnInit() {
    this.cvId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.listOfFeedbacks = await this._feedbackService.getAllFeedbacksByCvId(this.cvId);
    console.log(this.listOfFeedbacks);
  }

}
