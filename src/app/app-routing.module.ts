import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { LoginComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'news-list', pathMatch: 'full' },
  { path: 'news-list', component: NewsListComponent },
  { path: 'developers-list', component: DevelopersListComponent },
  { path: 'blogs-list', component: BlogsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
