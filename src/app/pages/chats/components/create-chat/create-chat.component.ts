import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatService } from '../../../../shared/services/chat/chat.service';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Chat } from '../../../../shared/classes/chat/chat.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: ['./create-chat.component.scss'],
})
export class CreateChatComponent {
  constructor(
    private chatService: ChatService,
    private authService: AuthService,
    private dialogRef: MatDialogRef<CreateChatComponent>,
    private snackBar: MatSnackBar
  ) {}

  public chatName: FormControl<string> = new FormControl('', [
    Validators.required,
  ]);

  public createChat(): void {
    const { userId } = this.authService.getAccessTokenPayload();

    if (!this.chatName.value) {
      return;
    }

    this.chatService
      .createChat({ name: this.chatName.value, ownerId: userId })
      .subscribe({
        next: (chat: Chat) => {
          this.dialogRef.close();
          this.snackBar.open('Chat created successfully!', '', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000,
          });
        },
        error: () => {},
      });
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
