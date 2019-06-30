import { Recipe } from "./recipe.model";
import { Headers, Http, Response } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';

import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  constructor(private http: Http) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Sehr lecker',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Pommes', 10),
        new Ingredient('Schnitzel', 1),
      ]
    ),
    new Recipe('Salat', 'Auch lecker?', 'http://www.about.ch/culture/food/salat.jpg', []),
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://ng2-de-http.firebaseio.com/recipe.json', body, {headers: headers});
  }

  fetchData() {
    this.http.get('https://ng2-de-http.firebaseio.com/recipe.json')
      .map((response: Response) => response.json())
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }
}
