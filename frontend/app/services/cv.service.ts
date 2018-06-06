import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CV } from '../models/cv';
import { httpOptions } from './httpOptions';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }

  getAllCVs(): Promise<CV[]>{
    return this.http.get<CV[]>("http://localhost:3000/cv").toPromise();
  }

  getAllSubmittedCVs(): Promise<CV[]>{
    return this.http.get<CV[]>("http://localhost:3000/cv/submitted").toPromise();
  }

  getCVs(status: string, studentId: number): Promise<Object[]> {
    return this.http.get<Object[]>(`http://localhost:3000/cv/${status}/${studentId}`).toPromise();
  }

  saveCV(cv: CV): Promise<CV> {
    return this.http.post<CV>("http://localhost:3000/cv", JSON.stringify(cv), httpOptions).toPromise();
  }

  getCvById(id: number): Promise<CV> {
    return this.http.get<CV>(`http://localhost:3000/cv/${id}`).toPromise();
  }

  updateCV(cv: CV): Promise<CV> {
    return this.http.put<CV>(`http://localhost:3000/cv/${cv.id}`, JSON.stringify(cv), httpOptions).toPromise();
  }

  deleteCV(id: number) : Promise<CV> {
    return this.http.delete<CV>(`http://localhost:3000/cv/${id}`).toPromise()
  }

}
