import { Component, Input } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  @Input() posts: Post[];
  constructor() {}
}
