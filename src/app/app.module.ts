import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsService } from './news.service';
import { NewsListComponent } from './news-list/news-list.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    BlogsListComponent,
    DevelopersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
