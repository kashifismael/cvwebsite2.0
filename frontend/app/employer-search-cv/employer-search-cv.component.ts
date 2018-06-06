import { Component, OnInit } from '@angular/core';
import { ICategory } from '../models/category';
import { CategoryService } from '../services/category.service';
import { CvService } from '../services/cv.service';
import { CV } from '../models/cv';

@Component({
  selector: 'app-employer-search-cv',
  templateUrl: './employer-search-cv.component.html',
  styleUrls: ['./employer-search-cv.component.css']
})
export class EmployerSearchCvComponent implements OnInit {

  chosenCategory: string = "All";
  allCategories: ICategory[] = [];
  allCVs: CV[] = [];
  CVsToShow: CV[] = [];

  constructor(private _categoryService: CategoryService,
    private _cvService: CvService) { }

  async ngOnInit() {
    this.allCategories = await this._categoryService.getAllCategories().toPromise();
    [this.allCategories, this.allCVs] = await Promise.all([
      await this._categoryService.getAllCategories().toPromise(),
      await this._cvService.getAllCVs()
    ])
    this.CVsToShow = this.allCVs;
  }

  filterCategory() {
    //console.log(this.chosenCategory);
    if (this.chosenCategory != "All") {
      this.CVsToShow = this.allCVs.filter((cv) => cv.categoryId == parseInt(this.chosenCategory));
    } else {
      this.CVsToShow = this.allCVs;
    }
  }

}
