import { NgModule } from '@angular/core';
import { ChatsPageComponent } from './chats-page.component';
import { ChatsPageRoutingModule } from './chats-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ChatsPageComponent],
  imports: [ChatsPageRoutingModule, MatButtonModule, MatCardModule],
})
export class ChatsPageModule {}
