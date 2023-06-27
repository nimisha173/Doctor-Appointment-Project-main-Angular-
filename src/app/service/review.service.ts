import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../review/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

saveReview(review:Review):
  Observable<Object>{
  return this.http.post('http://localhost:8300/review/create',
  review);
  }
}
