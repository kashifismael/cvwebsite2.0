import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { CategoryService } from '../services/category.service';
import { ICategory } from '../models/category';
import { CV } from '../models/cv';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit-cv',
  templateUrl: './student-edit-cv.component.html',
  styleUrls: ['./student-edit-cv.component.css']
})
export class StudentEditCvComponent implements OnInit {

  allCategories: ICategory[];
  currentCV: CV;
  //currentCV : CV = new CV();

  constructor(private _cvService: CvService,
    private _categoryService: CategoryService,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.currentCV = new CV();
    const cvId = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.currentCV = await this._cvService.getCvById(cvId);
    [this.currentCV, this.allCategories] =
    await Promise.all([
      this._cvService.getCvById(cvId),
      this._categoryService.getAllCategories().toPromise()
    ])
  }

  async saveCV() {
    this.currentCV.status = "Saved";
    let savedCV = await this._cvService.updateCV(this.currentCV);
    console.log(savedCV);
  }

  async submitCV() {
    this.currentCV.status = "Submitted";
    this.currentCV.submitDate = new Date().toISOString();
    let submittedCV = await this._cvService.updateCV(this.currentCV);
    console.log(submittedCV);
  }

}
