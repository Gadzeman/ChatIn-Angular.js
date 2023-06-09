import { NgModule } from '@angular/core';
import { ChatsPageComponent } from './chats-page.component';
import { ChatsPageRoutingModule } from './chats-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateChatComponent } from './components/create-chat/create-chat.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ChatsPageComponent, CreateChatComponent],
  imports: [
    ChatsPageRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
  ],
})
export class ChatsPageModule {}
