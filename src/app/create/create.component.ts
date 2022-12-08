import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  //search for meme
  memeSearch(value) {
    this.postService.giphySearchResults(value)
    console.log('Search meme is:', this.memeSearch)
  }

}
