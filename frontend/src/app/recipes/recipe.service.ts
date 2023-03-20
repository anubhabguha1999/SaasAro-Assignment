import {RecipeModel} from "../Models/recipe/recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import { IngredientModel } from "../Models/ingredient/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {
  recipes: RecipeModel[] = [];
  selectedRecipe = new EventEmitter<RecipeModel>();

  constructor(private shoppingListSrv: ShoppingListService) {
  }

  createRecipes() {

    this.recipes.push({
      name: 'Beef Recipe',
      description: 'A recipe of beef',
      imagePath: 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      ingredients: [
        new IngredientModel('Beef', 1),
        new IngredientModel('Herbs', 1)
      ]
    });

    this.recipes.push({
      name: 'Chicken Recipe',
      description: 'A recipe of chicken',
      imagePath: 'https://cdn.pixabay.com/photo/2018/06/01/20/25/chicken-3447081_1280.jpg',
      ingredients: [
        new IngredientModel('Chicken', 1),
        new IngredientModel('Sauce', 1)
      ]
    });

    this.recipes.push({
      name: 'Salad Recipe',
      description: 'A recipe of salad',
      imagePath: 'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg',
      ingredients: [
        new IngredientModel('Grip', 1),
        new IngredientModel('Nuts', 1)
      ]
    });

    return this.recipes;
  }

  getRecipes() {
    this.recipes = this.createRecipes();
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: string) {
    this.shoppingListSrv.addIngredientsToShoppingList(ingredients);
  }
}
