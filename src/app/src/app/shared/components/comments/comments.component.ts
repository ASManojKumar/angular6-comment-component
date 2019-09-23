import {
  Component, OnInit, Input, Directive, ViewContainerRef, ViewChildren, QueryList, ComponentFactoryResolver
} from '@angular/core';
import { ReplyCommentComponent } from '../reply-comment/reply-comment.component';

@Directive({
  selector: '[datacontainer]',
})
export class DatacontainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comment_data: Array<object> = [];
  public commentIndex = 0;
  public reply: Array<object> = [];
  @ViewChildren(DatacontainerDirective) entry: QueryList<DatacontainerDirective>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() { }

  replyComment(index) {
    const myFactory = this.resolver.resolveComponentFactory(ReplyCommentComponent);
    if (this.entry.toArray()[index].viewContainerRef.length <= 0) {
      const container_reference = this.entry.toArray()[index].viewContainerRef.createComponent(myFactory);
      container_reference.instance['commentNo'] = index;
      container_reference.changeDetectorRef.detectChanges();
      container_reference.instance.userReplycomment.subscribe(data => {
        this.receiveReplyComment(data, index);
      });
      container_reference.instance.removeReplyComment.subscribe(no => {
        container_reference.destroy();
      });
    }
  }

  likeComment(data) {
    data.commentLiked = !data.commentLiked;
  }

  receiveReplyComment($event, i) {
    this.reply = $event;
    this.comment_data.forEach((element) => {
      if (element['commentId'] === i) {
        element['replyComment'].push(...$event);
      }
    });
  }
}