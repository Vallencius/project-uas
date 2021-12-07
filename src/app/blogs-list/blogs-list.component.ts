import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})

export class BlogsListComponent implements OnInit {
  public news: any;
  constructor(private newsService: NewsService, private router: Router, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.news = this.newsService.getBlog();
  }

  login() {
    this.router.navigate(['\login']);
  }
}
