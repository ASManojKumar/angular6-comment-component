import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './src/app/shared/components/comment/comment.component';
import { ProfilePicComponent } from './src/app/shared/components/profile-pic/profile-pic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { pipesModule } from './src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    ProfilePicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InfiniteScrollModule,
    pipesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
