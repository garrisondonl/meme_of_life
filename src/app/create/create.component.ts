import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/services/firebase.service';
import { PostService } from '../shared/post.service';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  searchResults = [];

  postDetails = {
    displayName: '',
    url: '',
    favorite: false,
  }

  postCollectiondata: { displayName: string, url: string, favorite: boolean}[] | any = [];

  constructor(private postService: PostService, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.searchResults = this.postService.getResults();

    this.postService.resultsChanged.subscribe((data:any) => {
      this.searchResults = data;
      console.log(data)
      console.log(this.searchResults)
    })
    this.get();
    this.firebaseService.obsr_UpdatedSnapshot.subscribe((snapshot) => {
      this.updatePostCollection(snapshot);
      console.log(this.postCollectiondata);
    })
  }

  async add() {
    const { displayName, url, favorite} = this.postDetails;
    await this.firebaseService.addPost(displayName, url, favorite);
    this.postDetails.displayName = "";
    this.postDetails.url = "";
    this.postDetails.favorite = false;
  }

  async get() {
    const snapshot = await this.firebaseService.getPosts();
    this.updatePostCollection(snapshot);
  }

  updatePostCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.postCollectiondata = [];
    snapshot.docs.forEach((post) => {
      this.postCollectiondata.push({ ...post.data(), id: post.id});
    })
  }

  async delete(docId: string) {
    await this.firebaseService.deletePost(docId);
  }

  async update(docId: string, favorite: boolean){
    await this.firebaseService.updatePost(docId, favorite.valueOf());
  }
  //search for meme
  memeSearch(value) {
    this.postService.giphySearchResults(value)
  }

  // button next to result
  createPost(result){
    this.postService.createPost(result);
  }

}
