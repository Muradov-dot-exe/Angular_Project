import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Post } from '../post.interface';
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit, OnChanges {
  @Input() post: Post;

  @Output() postSelected = new EventEmitter<Post>();

  constructor() {console.log('const')}

ngOnInit(): void {
    
}
ngOnChanges(changes:SimpleChanges): void {

 if (changes.post && changes.post=currentValue) {
   console.log('ngOnChanges');
 }}
  markAsFav(): void {
    this.postSelected.emit(this.post);
  }
}
