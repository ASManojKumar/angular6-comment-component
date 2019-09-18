import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {

  public id = 0;
  commentForm: FormGroup;
  submitted: Boolean = false;
  userName: string;
  profileImg: string;
  commentData: Array<object> = [];

  @Input() hasAccess?: boolean;
  @Output() userComment = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.commentForm.invalid) {
      return false;
    } else {
      this.commentData.push({
        createdOn: Date.now(),
        text: this.commentForm.controls['comment'].value,
        replyComment: [],
        user: {
          profileImg: this.profileImg,
          name: this.userName
        }
      });
      this.userComment.emit(this.commentData);
      this.commentData = [];
      this.commentForm.reset(this.commentForm.value.comment = '');
      this.commentForm.controls.comment.markAsPristine();
      this.commentForm.controls.comment.markAsUntouched();
      this.commentForm.controls.comment.updateValueAndValidity();
    }
  }
}