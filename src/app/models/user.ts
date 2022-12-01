export class User {
  user: string;
  password: string;
  manager: boolean;

  constructor(user:string, password:string, manager:boolean) {
    this.user=user;
    this.password=password;
    this.manager=manager;
  }
}
