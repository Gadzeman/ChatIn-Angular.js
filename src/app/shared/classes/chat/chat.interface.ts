import { User } from '../user/user.interface';

export interface Chat {
  id: number;
  name: string;
  owner: User | number;
}
