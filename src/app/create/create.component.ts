import { Component, OnInit } from '@angular/core';

import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  searchResults = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.searchResults = this.postService.getResults();

    this.postService.resultsChanged.subscribe((data:any) => {
      this.searchResults = data;
      console.log(data)
      console.log(this.searchResults)
    })

  }

  //search for meme
  memeSearch(value) {
    this.postService.giphySearchResults(value)


  }

}
