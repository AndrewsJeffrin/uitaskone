import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  public registerUser!: FormGroup;
  public addresslist!: FormArray;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.registerUser = this.fb.group({
      firstname: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: [''],
      mobilenumber: [''],
      mobile: ['', [Validators.required]],
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
    console.log(this.registerUser.value)
  }
  getControls() {
    return (this.registerUser.get('addresslist') as FormArray).controls;
  }
  addAddress(index: number) {
    this.addresslist = this.registerUser.get('addresslist') as FormArray;
    this.addresslist.push(this.getAddress(index));
  }
}
