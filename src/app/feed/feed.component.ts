import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];

  constructor( private postService: PostService ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    //get all posts from db firestore
    this.postService.getFirebasePostDatabase();
  }

}
