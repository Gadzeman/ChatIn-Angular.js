import {UserRoles} from "./user-roles.enum";

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: UserRoles;
}
