export class User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  favoritePosts?: null;


  constructor(username:string, firstName:string, lastName:string, email:string, password:string, favoritePosts?: null) {
    this.username=username;
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.password=password;
    this.favoritePosts=favoritePosts;
  }
}
