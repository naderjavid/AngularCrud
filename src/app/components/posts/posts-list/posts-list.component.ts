import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { TypicodeService } from 'src/app/services/typicode.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(private service: TypicodeService) { }

  posts : Post[] = [] as Post[];
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.service.getPosts().subscribe(posts => this.posts = posts);
  }
}
