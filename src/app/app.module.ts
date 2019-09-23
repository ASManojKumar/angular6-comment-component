import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { pipesModule } from './src/app/shared/pipes/pipes.module';
import { CommentFormComponent } from './src/app/shared/components/comment-form/comment-form.component';
import { CommentsComponent, DatacontainerDirective } from './src/app/shared/components/comments/comments.component';
import { ReplyCommentComponent } from './src/app/shared/components/reply-comment/reply-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent,
    CommentsComponent,
    ReplyCommentComponent,
    DatacontainerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InfiniteScrollModule,
    pipesModule.forRoot()
  ],
  bootstrap: [AppComponent],
  entryComponents: [ReplyCommentComponent]
})

export class AppModule { }