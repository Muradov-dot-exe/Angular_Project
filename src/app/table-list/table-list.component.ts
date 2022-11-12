import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  posts: Post[];

  constructor() {}

  ngOnInit(): void {
    this.posts = [
      {
        id: 1,
        title: 'Great Pyramid',
        content: 'The great pyramid ...',
        author: 'Nick Brundle',
        publishDate: 'Aug 16, 2019',
      },
    ];
  }
  onPostSubmit(post: Post): void {
    const newPost = {
      ...post,
      id: this.posts.length + 1,
      author: 'Ivan Ivanov',
      publishDate: 'Oct 23,2022',
    };
    this.posts.push(newPost);
  }
}
