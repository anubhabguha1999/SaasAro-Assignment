import { Component, OnInit } from '@angular/core';
import { IngredientModel } from "../Models/ingredient/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [];

  constructor(private shoppingListSrv: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListSrv.createIngredients();
    this.shoppingListSrv.ingredientsChanged
      .subscribe((ingredients: IngredientModel[]) => {
        this.ingredients = ingredients;
      });
  }
}
