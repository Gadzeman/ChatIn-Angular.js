import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";


const publicComponents = [
  HeaderComponent,
];

@NgModule({
  declarations: [
    ...publicComponents,
  ],
  imports: [
    RouterModule,
  ],
  exports: [
    ...publicComponents,
  ],
})
export class ThemeModule { }
