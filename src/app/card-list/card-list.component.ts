import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  posts: Post[];

  constructor() {}

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'Great Wall of China',
        content: 'Great might be an understatement...',
        author: 'Amy Tikkanen',
        publishDate: 'Nov 01,2017',
      },
    ];
  }
  onPostSubmit(post: Post): void {
    const newPost = {
      ...post,
      id: this.posts.length + 1,
    };

    this.posts.push(newPost);
  }
}
