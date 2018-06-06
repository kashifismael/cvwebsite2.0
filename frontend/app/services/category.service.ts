import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../models/category';
import { Observable } from 'rxjs';
import { httpOptions } from './httpOptions';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>("http://localhost:3000/categories");
  }

  addCategory(newCategory: Object): Promise<ICategory>{
    return this.http.post<ICategory>("http://localhost:3000/categories", JSON.stringify(newCategory), httpOptions).toPromise()
  }

}
