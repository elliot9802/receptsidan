import { Component, OnInit } from '@angular/core';
import { DishesService } from '../services/dishes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receptsidor',
  templateUrl: './receptsidor.component.html',
  styleUrls: ['./receptsidor.component.scss'],
})
export class ReceptsidorComponent implements OnInit {
  recipes: any = {};
  inputRating: number | null = null;
  visaInformation: boolean = false;

  toggleVisaInformation(): void {
    this.visaInformation = !this.visaInformation;
  }

  constructor(
    private route: ActivatedRoute,
    private dishesService: DishesService
  ) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId) {
      this.dishesService
        .getDishesById(recipeId)
        .subscribe((recipeData: any) => {
          this.recipes = recipeData;
        });
    }
  }

  submitRating(): void {
    if (this.inputRating !== null && this.recipes?.id) {
      this.dishesService
        .submitRating(this.recipes.id.toString(), this.inputRating)
        .subscribe((newAverageRating: number) => {
          this.recipes.rating = newAverageRating;
        });
    }
  }
}
