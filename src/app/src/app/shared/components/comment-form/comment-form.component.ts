import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})

export class CommentFormComponent implements OnInit {
  commentForm: FormGroup;
  commentData: Array<object> = [];
  submitted: Boolean = false;
  userName: string;
  profileImg: string;
  public id = 0;
  @Output() usercomment = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.commentForm.invalid) {
      return false;
    } else {
      this.commentData.push({
        commentId: this.id++,
        createdOn: Date.now(),
        text: this.commentForm.controls['comment'].value,
        replyComment: [],
        user: {
          profileImg: 'https://s3.ap-south-1.amazonaws.com/ph-public-bucket/dev/2569/ONBOARDING_H_USER_PROFILE/agWtTzd3f7Pm0Mi.',
          name: 'Manoj'
        }
      });
      this.usercomment.emit(this.commentData);
      this.commentData = [];
      this.commentForm.reset(this.commentForm.value.comment = '');
      this.submitted = false;
    }
  }
}