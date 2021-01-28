import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [RegisterComponentComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule
    
  ],
  exports: [
    RegisterComponentComponent
  ]
})
export class RegisterModule { }
