import { NgModule } from '@angular/core';
import { ChatsPageComponent } from './components/chats-page/chats-page.component';
import { ChatsPageRoutingModule } from './chats-page-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateChatComponent } from './components/create-chat/create-chat.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SelectedChatComponent } from './components/selected-chat/selected-chat.component';
import { MatMenuModule } from '@angular/material/menu';
import { UpdateChatUsersComponent } from './components/add-remove-user/update-chat-users.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    ChatsPageComponent,
    CreateChatComponent,
    SelectedChatComponent,
    UpdateChatUsersComponent,
  ],
  imports: [
    ChatsPageRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    MatMenuModule,
    MatCheckboxModule,
  ],
})
export class ChatsPageModule {}
