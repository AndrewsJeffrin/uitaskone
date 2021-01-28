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
  

  public registerUser: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    emailid: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl(''),
    mobilenumber: new FormControl(''),
    mobile: new FormControl(''),
    addresslist: new FormArray([])
  });
  //public name!:any;
  constructor(private fb: FormBuilder,private router: Router) {

  }
  emailid = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.emailid.hasError('required')) {
      return 'You must enter a value';
    }else{
    return this.emailid.hasError('email') ? 'Not a valid email' : '';
    }
  }
  ngOnInit(): void {
    this.registerUser = this.fb.group({
      firstname: ['',[Validators.required]],
      emailid: [''],
      password: ['',[Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
      mobilenumber: ['',[Validators.required]],
      mobile: [''],
      addresslist: this.fb.array([this.getAddress()])
      
    })
  }
  getAddress(): FormGroup {
    return this.fb.group({
      addresslineone: [''],
      addresslinetwo:[''],
      country: [''],
      state: [''],
      district: ['']
    })
  }
 
  onSubmit() {   
    // localStorage.setItem('userdetails',this.registerUser.value)
    // localStorage.setItem('email',this.registerUser.controls.emailid.value);
    // localStorage.setItem('password',this.registerUser.controls.password.value);
    // localStorage.setItem('firstname',this.registerUser.controls.firstname.value);
    // localStorage.setItem('mobilenumber',this.registerUser.controls.mobilenumber.value);
    // localStorage.setItem('mobile',this.registerUser.controls.mobile.value);
    // localStorage.setItem('addressone',this.registerUser.controls.addresslineone.value)
    // localStorage.setItem('addresstwo',this.registerUser.controls.addresslinetwo.value)
    // localStorage.setItem('country',this.registerUser.controls.country.value)
    // localStorage.setItem('state',this.registerUser.controls.state.value)
    // localStorage.setItem('district',this.registerUser.controls.district.value)
    
    console.log(localStorage.setItem('userdetails',JSON.stringify(this.registerUser.value)));
    console.log(this.registerUser.value)
    //console.log(localStorage.getItem('country'));
  }
  // getControls() {
  //   console.log((this.registerUser.controls.addresslist as FormArray).controls);
  //   let a=(this.registerUser.controls.addresslist as FormArray)
  //   console.log(a)
  //   let b=(this.registerUser.controls.addresslist as FormArray).controls
  //   return (this.registerUser.controls.addresslist as FormArray).controls;
  //   //return this.registerUser.get('')
  // }
  get addressGroups() {
  
    //console.log(this.registerUser.get('addresslist') as FormArray);
    return this.registerUser.get('addresslist') as FormArray;
  }


  // this.addresslist = this.registerUser.get('addresslist')as FormArray;
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
  // public hasError = (controlName: string, errorName: string) => {
  //   return this.registerUser.controls[this.registerUser.controls.emailid.value].hasError(errorName);
  // }
//   isChange=false;
//   onChange($event: MatSlideToggleChange) {
//     //this.isChange=true;
//     console.log($event);
// }
}
