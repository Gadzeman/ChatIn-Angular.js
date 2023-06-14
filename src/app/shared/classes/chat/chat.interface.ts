import { User } from '../user/user.interface';

export interface Chat {
  id: number;
  name: string;
  ownerId: number;
  owner: User;
}
