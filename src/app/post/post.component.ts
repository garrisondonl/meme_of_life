import { Component, Input, OnInit } from '@angular/core';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import { PostService } from '../shared/post.service';
import { FirebaseService } from '../shared/services/firebase.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  localPost = this.postService.createdPosts


  postDetails = {
    displayName: '',
    url: '',
    favorite: false,
  }

  postCollectiondata: { displayName: string, url: string, favorite: boolean}[] | any = [];


  constructor(private postService: PostService, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.get();
    this.firebaseService.obsr_UpdatedSnapshot.subscribe((snapshot) => {
      this.updatePostCollection(snapshot);
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
    await this.firebaseService.updatePost(docId, favorite);
  }

  //making a favorite
  onFavorite() {

  }

  //deleting a post
  onDelete() {

  }

  //hide a post
  onHide() {

  }

}
