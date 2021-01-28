import { Component, OnInit } from '@angular/core';
import { FormControl,  Validators } from '@angular/forms';


@Component({
  selector: 'app-testerror',
  templateUrl: './testerror.component.html',
  styleUrls: ['./testerror.component.css']
})
export class TesterrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl ('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }else if(this.email.hasError('dirty')){
      return 'enter your mail address'
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}
