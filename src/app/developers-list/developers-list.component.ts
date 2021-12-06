import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.css']
})
export class DevelopersListComponent implements OnInit {
  public news: any
  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.news = this.newsService.getDevelopers();
  }

}
