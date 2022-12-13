import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private firebaseUrl = environment.firebase.authDomain + '/' + environment.firebase.apiKey;
  // private firebasePostsUrl = environment.firebase.authDomain + '/' + environment.firebase.apiKey;

  constructor(private http: HttpClient) { }

  // search results
  //need to still research & modify code where needed
  giphySearchResults(queryString) {
    this.http.get(`${environment.GIPHY_API_URL}?term=${queryString}`);
  }

  getFirebasePostDatabase(){
    this.http.get(this.firebaseUrl).subscribe((res) =>{
      console.log(res);
    });
  }
}
