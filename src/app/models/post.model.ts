import { User } from "./user.model";

export class Post {
  postCreator: string;        //Username
  postData: string            //Link to giphy Url to fetch
  isValid? = false;           //not sure what we were going to use this for

  constructor(user: User, postData: string, isValid: boolean) {
    this.postCreator=user.username;
    this.postData=postData;
    this.isValid=isValid;     //for completeness
  }
}
