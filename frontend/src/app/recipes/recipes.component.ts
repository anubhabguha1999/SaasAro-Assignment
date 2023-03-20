import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../Models/recipe/recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})

export class RecipesComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor(private recipeSrv: RecipeService) { }

  ngOnInit(): void {
    this.recipeSrv.selectedRecipe.subscribe((recipe: RecipeModel) => {
      this.selectedRecipe = recipe;
    });
  }

}
