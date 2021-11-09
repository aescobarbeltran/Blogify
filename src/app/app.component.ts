import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPost: Post [] = [];

  title = 'blogify';

savePost(post: Post) {
  this.storedPost.push(post)
}
}
