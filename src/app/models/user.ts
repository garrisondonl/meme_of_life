export class User {
  user: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  favoritePosts?: null;


  constructor(user:string, firstName:string, lastName:string, email:string, password:string, favoritePosts?: null) {
    this.user=user;
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.password=password;
    this.favoritePosts=favoritePosts;
  }
}
