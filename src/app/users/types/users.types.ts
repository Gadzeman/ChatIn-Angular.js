export enum UserRoles {
  admin = "admin",
  user = "user",
}

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRoles;
}
