import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ICategory } from '../models/category';
import { CV } from '../models/cv';
import { getLocaleDateTimeFormat } from '@angular/common';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-student-create-cv',
  templateUrl: './student-create-cv.component.html',
  styleUrls: ['./student-create-cv.component.css']
})
export class StudentCreateCvComponent implements OnInit {

  allCategories: ICategory[];
  newCV: CV = new CV();

  constructor(private _categoryService: CategoryService,
    private _cvService: CvService) { }

  async ngOnInit() {
    this.allCategories = await this._categoryService.getAllCategories().toPromise();
    this.newCV.studentId = parseInt(localStorage.getItem("studentId"));
  }

  async saveCV() {
    this.newCV.status = "Saved";
    //console.log(this.newCV);
    let savedCV = await this._cvService.saveCV(this.newCV);
    console.log(savedCV);
  }

  async submitCV() {
    this.newCV.status = "Submitted";
    //let date = new Date().toLocaleString();
    //console.log(date);
    this.newCV.submitDate = new Date().toISOString();
    //console.log(this.newCV);
    let submittedCV = await this._cvService.saveCV(this.newCV);
    console.log(submittedCV);
  }

}
