import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public userLogin!: FormGroup;
  public mailid!:any;
  public pass!:any;
  constructor(private router: Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userLogin=this.fb.group({
      useremail:[''],
      userpassword:['']
    })
  }
  registerlogin(){
    this.router.navigate(['/register']);
  }
  login(){
    this.router.navigate(['/userdashboard']);
  }

  loginCheck(){
  //localStorage.setItem('email','111');
  //localStorage.setItem('password','andrews@123');
  
  //console.log(localStorage.getItem('email'))
  //console.log(localStorage.getItem('password'))
  //console.log(this.userLogin.controls.useremail.value)
  //console.log(this.userLogin.value)

  if(localStorage.getItem('email')=== this.userLogin.controls.useremail.value && localStorage.getItem('password')===this.userLogin.controls.userpassword.value ){
    this.router.navigate(['/userdashboard']);
  }else{
    console.log("['login']")
  }
} 
}
