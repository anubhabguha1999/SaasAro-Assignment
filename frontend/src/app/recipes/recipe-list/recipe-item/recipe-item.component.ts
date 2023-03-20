import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../../Models/recipe/recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()  recipe: RecipeModel;

  constructor(private recipeSrv: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSrv.selectedRecipe.emit(this.recipe);
  }

}
