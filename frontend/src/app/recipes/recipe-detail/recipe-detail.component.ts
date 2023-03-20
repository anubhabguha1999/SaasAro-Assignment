import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from "../../Models/recipe/recipe.model";
import {RecipeService} from "../recipe.service";


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(JSON.stringify(this.recipe.ingredients));
  }

}
