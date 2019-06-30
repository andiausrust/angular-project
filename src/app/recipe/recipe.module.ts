import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipeComponent } from "./recipe.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start.component";
import { recipeRouting } from "./recipe.routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    ReactiveFormsModule,
    recipeRouting,
    SharedModule
  ]
})
export class RecipeModule { }
