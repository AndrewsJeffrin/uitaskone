import { Component, OnInit } from '@angular/core';
import {  FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators,NgModel } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

import { Router } from '@angular/router';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  
 a:any=[];
 
  public registerUser: FormGroup = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    emailid: new FormControl(''),
    password: new FormControl(''),
    mobilenumber: new FormControl(''),
    mobile: new FormControl(''),
    addresslist: new FormArray([])
  });
 
  constructor(private fb: FormBuilder,private router: Router) {

  }
  emailid = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.emailid.hasError('required')) {
      return 'You must enter a value';
    }
    return this.emailid.hasError('email') ? 'Not a valid email' : '';
    
  }
  pwdPattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  mobnumPattern = "^[0-9]*$"; 
  ngOnInit(): void {
    this.registerUser = this.fb.group({
      firstname: ['',Validators.compose([Validators.required])],
      emailid: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern(this.pwdPattern)]],
      mobilenumber: ['',[Validators.required]],
      mobile: ['',[Validators.required,Validators.pattern(this.mobnumPattern)]],
      addresslist: this.fb.array([this.getAddress()])
      
    })
  } 
  getAddress(): FormGroup {
    return this.fb.group({
      addresslineone: ['',[Validators.required]],
      addresslinetwo:['',[Validators.required]],
      country: ['',[Validators.required]],
      state: ['',[Validators.required]],
      district: ['',[Validators.required]]
    })
  }

  onSubmit() {   
    var receiveddata =(this.registerUser.value);
    this.a.push( receiveddata);
    localStorage.setItem('uservalue',JSON.stringify( this.a));
    console.log("value is",JSON.parse(localStorage.getItem('uservalue') || '[]'));
    // localStorage.setItem('uservalue',JSON.stringify( receiveddata));
    // console.log()
  }

  get addressGroups() {
    return this.registerUser.get('addresslist') as FormArray;
  }

  addAddress(index: number) {
    let  addresslist = this.registerUser.controls.addresslist  as FormArray;
    addresslist.push(this.getAddress());
  }

  onDelete(index: number):void{
    let  addresslist = this.registerUser.controls.addresslist  as FormArray;
    addresslist.removeAt(index)
  }
  
  loginForm(){
    this.router.navigate(['login']);
  }
 
  value:number=1;
  // changeTheme(): any{
  //   if(this.value===4){
  //     this.value=4;
  //   }else if(this.value==2){
  //     this.value=2
  //   }else if(this.value==3){
  //     this.value=3
  //   }else{
  //     this.value==this.value
  //   }

  // }
  themeOne(){
    this.value=1
  }
  themeTwo(){
    this.value=2
  }
  themeThree(){
    this.value=3
  }
  themeFour(){
    this.value=4
  }
  toggleValue = new FormControl();
  // onChange(){

  //   if(this.checked===true){
  //     this.checked=false
  //   }else{
  //     this.checked=true
  //   }
  //   console.log(this.checked)
  // }
  onChange(){
    console.log(this.toggleValue .value)
  }
}
