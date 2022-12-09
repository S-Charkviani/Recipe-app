import { Component, Output , EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@Output() recipeCreated=new EventEmitter<Ingredient>();
@ViewChild('nameInput, {static: true}') nameInputRef: ElementRef;
@ViewChild('amountInput, {static: true}') amountInputRef: ElementRef;

  onAddRecipe(){
const ingName=this.nameInputRef.nativeElement.value;
const ingAmount=this.amountInputRef.nativeElement.value;
const newIngredient=new Ingredient(ingName, ingAmount);
this.recipeCreated.emit(newIngredient);
  }
}
