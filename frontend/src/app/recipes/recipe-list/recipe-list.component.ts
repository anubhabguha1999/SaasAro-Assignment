import {Component, OnInit} from '@angular/core';
import { RecipeModel } from "../../Models/recipe/recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[];

  constructor(private recipeSrv: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeSrv.getRecipes();
  }
}
