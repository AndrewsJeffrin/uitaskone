import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserloginComponent } from './userlogin/userlogin.component';
@NgModule({
  declarations: [UserloginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [
    UserloginComponent
  ]
})
export class LoginModule { }
