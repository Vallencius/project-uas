import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-uas';

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(['\login']);
  }

  showBlog(): void {
    this.router.navigate(['\blogs-list']);
  }

  logout(): void {
    this.afAuth.signOut();
    this.router.navigate(["\login"]);
  }
}