import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  registerlogin(){
    this.router.navigate(['/register']);
  }
  login(){
    this.router.navigate(['/userdashboard']);
  }
}
