import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  private apiUrl =
    'https://www-th-frontend.azurewebsites.net/api/exam/v1/recipe';
  private ratingUrl = `${this.apiUrl}/rating`;

  constructor(private http: HttpClient) {}

  getDishes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getDishesById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  submitRating(recipeId: number, rating: number): Observable<any> {
    const ratingData = { recipeId, rating };
    return this.http.post<any>(this.ratingUrl, ratingData);
  }
}
