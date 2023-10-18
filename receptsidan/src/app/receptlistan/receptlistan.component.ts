import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/dishes.service';

@Component({
  selector: 'app-receptlistan',
  templateUrl: './receptlistan.component.html',
  styleUrls: ['./receptlistan.component.scss'],
})
export class ReceptlistanComponent implements OnInit {
  recipes?: any[] = [];
  visaIngredienser: { [key: string]: boolean } = {};

  constructor(private dishesService: DishesService) {}

  ngOnInit(): void {
    this.dishesService.getDishes().subscribe((data: any) => {
      this.recipes = data;
    });
  }

  toggleVisaIngredienser(id: string): void {
    this.visaIngredienser[id] = !this.visaIngredienser[id];
  }
}
