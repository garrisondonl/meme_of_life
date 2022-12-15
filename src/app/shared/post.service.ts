import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  results = [];
  resultsChanged = new Subject<any []>();
  createdPosts = [];
  private firebaseUrl = environment.firebase.authDomain + '/' + environment.firebase.apiKey;
  // private firebasePostsUrl = environment.firebase.authDomain + '/' + environment.firebase.apiKey;


  constructor(private http: HttpClient) { }

  // search results
  giphySearchResults(queryString) {
    this.http.get(`${environment.GIPHY_API_URL}?term=${queryString}`)
    .subscribe((res : any) => {
      const data = res.data.slice(0,10)
      this.resultsChanged.next(data);
    });
    console.log("service results", this.results);
    //this.resultsChanged.next(this.results.slice());

  }

  getResults() {
    return this.results.slice();
  }

  // This works with button on create component to save that gif
  // currently, this saves the gif into a local array called "createdPosts"
  createPost(result) {
    this.createdPosts.push(result)
    console.log(this.createdPosts)
  }

  getFirebasePostDatabase(){
    this.http.get(this.firebaseUrl).subscribe((res) =>{
      console.log(res);
    });
  }
}
