import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.scss']
})
export class ReplyCommentComponent implements OnInit {

  replyCommentForm: FormGroup;
  replyComment: Array<object> = [];
  submitted: Boolean = false;
  @Output() userReplycomment = new EventEmitter();
  @Output() removeReplyComment = new EventEmitter();
  @Input() commentNo: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.replyCommentForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.replyCommentForm.invalid) {
      return false;
    } else {
      this.replyComment.push({
        currentDate: Date.now(),
        commentTxt: this.replyCommentForm.controls['comment'].value
      });
      this.userReplycomment.emit(this.replyComment);
      this.removeReplyComment.emit(this.commentNo);
    }
  }
}