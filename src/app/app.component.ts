import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  comment_data: Array<object> = [];
  comments: any;

  constructor() { }

  ngOnInit() { }

  receiveComment($event) {
    if (this.comment_data && this.comment_data.length) {
      let comment_object = $event[0];
      let length = this.comment_data.length;
      comment_object.commentId = length++;
      this.comment_data.push(comment_object);
    } else {
      this.comment_data = $event;
    }
    this.comments = this.comment_data;
  }
}