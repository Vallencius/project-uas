import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public news:any;
  public form: FormGroup;
  
  constructor(private readonly fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
     });
  }

  ngOnInit(){
  }

  onFormSubmit() {
    if (this.form.valid) {
        if(this.form.getRawValue().password == 'iniPassword' && this.form.getRawValue().username == 'iniUser')
        this.router.navigateByUrl('/blogs-list')
        else
          alert('Username or password is false');
        ;
    } else {
        alert('All Fields are Required');
    }
  }
}
