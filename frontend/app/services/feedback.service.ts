import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../models/feedback';
import { httpOptions } from './httpOptions';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  saveFeedback(feedback : Feedback) : Promise<Feedback> {
    return this.http.post<Feedback>("http://localhost:3000/feedback", JSON.stringify(feedback), httpOptions).toPromise();
  }

  getAllFeedbacksByCvId(cvId : number) : Promise<Feedback[]> {
    return this.http.get<Feedback[]>(`http://localhost:3000/feedback/cv/${cvId}`).toPromise();
  }

}
