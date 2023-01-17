import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import {NgForOf} from "@angular/common";


const publicComponents = [
  HeaderComponent,
];

@NgModule({
  declarations: [
    ...publicComponents,
  ],
    imports: [
        RouterModule,
        NgForOf,
    ],
  exports: [
    ...publicComponents,
  ],
})
export class ThemeModule { }
