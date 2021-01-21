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
      mobile: ['', [Validators.required],[Validators.maxLength(10)]],
      addresslist: this.fb.array([this.getAddress(0)]),
      country: [''],
      state: [''],
      district: ['']
    })
  }
  getAddress(i: number): FormGroup {
    return this.fb.group({
      address: ['']
    })
  }
  onSubmit() {
    localStorage.setItem('users:any','this.registerUser.value:any');
    this.name=  localStorage.getItem('users');
    console.log(this.name)
  }
  getControls() {
    return (this.registerUser.get('addresslist') as FormArray).controls;
  }
  addAddress(index: number) {
    this.addresslist = this.registerUser.get('addresslist') as FormArray;
    this.addresslist.push(this.getAddress(index));
  }
  onDelete(index: number):void{
    this.addresslist.removeAt(index)
  }
  loginForm(){
    this.router.navigate(['']);
  }
}
