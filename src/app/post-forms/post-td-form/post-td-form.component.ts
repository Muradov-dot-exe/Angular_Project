import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/post.interface';

@Component({
  selector: 'app-post-td-form',
  templateUrl: './post-td-form.component.html',
  styleUrls: ['./post-td-form.component.scss'],
})
export class PostTdFormComponent implements OnInit {
  @ViewChild('form', { static: true }) ngForm: NgForm;
  @Output() postSubmitted = new EventEmitter<Post>();
  post: Post;

  constructor() {
    this.post = {
      title: '',
      content: '',
      author: '',
      publishDate: '',
    };
  }

  ngOnInit(): void {}
  onSubmit(): void {
    console.log(this.ngForm);
    console.log(this.ngForm.value);

    this.post.title = this.ngForm.value.title;
    this.post.content = this.ngForm.value.content;

    this.postSubmitted.emit(this.post);
  }
}
