import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  public registerUser!: FormGroup;
  public addresslist!: FormArray;
  public name!:any;
  constructor(private fb: FormBuilder,private router: Router) {

  }

  ngOnInit(): void {
    this.registerUser = this.fb.group({
      firstname: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: [''],
      mobilenumber: [''],
      mobile: [''],
      addresslist: this.fb.array([this.getAddress(0)])
      
    })
  }
  getAddress(i: number): FormGroup {
    return this.fb.group({
      addresslineone: [''],
      addresslinetwo:[''],
      country: [''],
      state: [''],
      district: ['']
    })
  }
  onSubmit() {
    localStorage.setItem('email',this.registerUser.controls.email.value);
    localStorage.setItem('password',this.registerUser.controls.password.value);
  }
  getControls() {
    return (this.registerUser.get('addresslist') as FormArray).controls;
  }
  addAddress(index: number) {
    this.addresslist = this.registerUser.get('addresslist')as FormArray;
    this.addresslist.push(this.getAddress(index));
  }
  onDelete(index: number):void{
    this.addresslist.removeAt(index)
  }
  loginForm(){
    this.router.navigate(['']);
  }
  
}
