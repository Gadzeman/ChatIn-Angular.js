import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from "./header/nav.component";
import {NgForOf} from "@angular/common";


const publicComponents = [
  NavComponent,
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
