export enum UserRoles {
  admin = "admin",
  user = "user",
}

export class User {
  id: number;
  name: string;
  email: string;
  role: UserRoles;
}
