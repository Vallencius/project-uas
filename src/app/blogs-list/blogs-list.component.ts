import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  public news:any;
  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.news = this.newsService.getBlog();
  }

}
