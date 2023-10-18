import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { recipesData } from '../recipes';

// Uncomment below line if you want to use HttpClient for fetching data from an API.
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  // Current implementation using static data.
  getDishes(): Observable<any> {
    return of(recipesData);
  }

  getDishesById(id: string): Observable<any> {
    const dish = recipesData.find((recipe) => recipe.id === +id);
    return of(dish);
  }

  submitRating(recipeId: number, rating: number): Observable<number> {
    const dish = recipesData.find((recipe) => recipe.id === recipeId);
    if (!dish) return throwError(() => new Error('Dish not found!'));

    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
      return throwError(
        () =>
          new Error('Invalid rating! Please provide a rating between 0 and 5.')
      );
    }
    dish.rating = (dish.rating + rating) / 2;
    return of(dish.rating);
  }

  /* 
  API-Based Implementation (currently commented out):

  private apiUrl = 'https://www-th-frontend.azurewebsites.net/api/exam/v1/recipe';
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
  */
}
