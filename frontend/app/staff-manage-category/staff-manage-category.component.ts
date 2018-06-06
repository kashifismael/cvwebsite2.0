import { Component, OnInit } from '@angular/core';
import { ICategory } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-staff-manage-category',
  templateUrl: './staff-manage-category.component.html',
  styleUrls: ['./staff-manage-category.component.css']
})
export class StaffManageCategoryComponent implements OnInit {

  allCategories: ICategory[];
  newCategory = {
    categoryName : ''
  }

  constructor(private _categoryService: CategoryService) { }

  async ngOnInit() {
    this.allCategories = await this._categoryService.getAllCategories().toPromise();
  }

  async addCategory() {
    //console.log(this.newCategory);
    const addedCategory: ICategory = await this._categoryService.addCategory(this.newCategory);
    console.log(addedCategory);
    this.allCategories.push(addedCategory);
  }

}
