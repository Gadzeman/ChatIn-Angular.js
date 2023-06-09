export interface Message {
  id?: number;
  chatId: number;
  userId: number;
  text: string;
  datetime?: Date;
}