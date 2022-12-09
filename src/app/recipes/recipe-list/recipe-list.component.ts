import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Meatballs',
      'Swedish meatballs with soy souce',
      'https://therecipecritic.com/wp-content/uploads/2016/08/swedishmeatballs2-3-500x500.jpg'
    ),
  ];
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {}
  ngOnInit() {}
}
