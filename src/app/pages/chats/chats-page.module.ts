import { NgModule } from '@angular/core';
import { ChatsPageComponent } from './chats-page.component';
import { ChatsPageRoutingModule } from './chats-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [ChatsPageComponent],
  imports: [
    ChatsPageRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
  ],
})
export class ChatsPageModule {}
