import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ShoppingListAddComponent } from "./shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ShoppingListAddComponent,
    ShoppingListComponent
  ],
  imports: [
    FormsModule,
    SharedModule
  ]
})
export class ShoppingListModule {}
