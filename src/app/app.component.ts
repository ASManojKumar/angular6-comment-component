import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  comment_data: any;
  comments: any;
  load_more: boolean = true;
  response: any;
  constructor() {
    this.comments = {};
    this.response = {
      "responseObject": {
        "content": [
          {
            "id": 0,
            "text": "test1",
            "createdOn": 1568282154000,
            "user": {
              "name": "Manoj",
              "profileImg": "https://s3.ap-south-1.amazonaws.com/ph-public-bucket/dev/2569/ONBOARDING_H_USER_PROFILE/agWtTzd3f7Pm0Mi."
            },
            "replyComment": []
          },
          {
            "id": 1,
            "text": "test1",
            "createdOn": 1565682154000,
            "user": {
              "name": "Manoj",
              "profileImg": "https://s3.ap-south-1.amazonaws.com/ph-public-bucket/dev/2569/ONBOARDING_H_USER_PROFILE/agWtTzd3f7Pm0Mi."
            },
            "replyComment": []
          }
        ],
        "last": true,
        "totalElements": 25,
        "totalPages": 3,
        "size": 10,
        "number": 0,
        "sort": [
          {
            "direction": "DESC",
            "property": "createdOn",
            "ignoreCase": false,
            "nullHandling": "NATIVE",
            "ascending": false,
            "descending": true
          }
        ],
        "first": true,
        "numberOfElements": 10
      },
      "status": {
        "code": 1000,
        "desc": "SUCCESS"
      }
    };
  }

  ngOnInit() {
    this.getComment();
  }

  title = 'comment-component';

  getComment(infinite?: boolean, no_loader?: boolean) {
    if (!infinite) {
      if (!no_loader) {
        this.comments.page_loader = true;
      } else {
        // page.number = 0;
      }
    } else {
      if (this.load_more === true) {
        this.comments.infinite_loader = true;
      }
    }
    if (this.load_more) {
      this.load_more = false;
    }
    this.comment_data = this.response.responseObject.content;
  }

  receiveComment($event) {
    if (this.comment_data.length) {
      let comment_object = $event[0];
      let length = this.comment_data.length;
      comment_object.id = length++;
      this.comment_data.unshift(comment_object);
    } else {
      this.comment_data = $event;
    }
  }
}
