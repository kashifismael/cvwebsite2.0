import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'staff-feedback-tabs',
  templateUrl: './staff-feedback-tabs.component.html',
  styleUrls: ['./staff-feedback-tabs.component.css']
})
export class StaffFeedbackTabsComponent implements OnInit {

  @Input() parentData: number; 
  
  constructor() { }

  ngOnInit() {
  }

}
