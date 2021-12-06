import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';

const routes: Routes = [
  { path: 'news-list', component: NewsListComponent },
  { path: 'developers-list', component: DevelopersListComponent },
  { path: 'blogs-list', component: BlogsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
