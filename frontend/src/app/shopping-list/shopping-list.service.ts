import {IngredientModel} from "../Models/ingredient/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  private ingredients: IngredientModel[];
  ingredientsChanged = new EventEmitter<IngredientModel[]>();

  createIngredients() {
    this.ingredients = [
      new IngredientModel('Apple', 5),
      new IngredientModel('Corns', 4),
      new IngredientModel('Eggs', 10)
    ]

    return this.ingredients;
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
    console.log(this.ingredients.slice());
  }

  addIngredientsToShoppingList(ingredientsToBeAdded: string) {
    let newIngredients: IngredientModel[] = JSON.parse(ingredientsToBeAdded);
    this.ingredientsChanged.emit(newIngredients.slice());
  }
}
