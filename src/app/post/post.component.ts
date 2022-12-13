import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  localPost = this.postService.createdPosts


  constructor(private postService: PostService) { }

  ngOnInit(): void {
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
