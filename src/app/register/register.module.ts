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
    MatIconModule
    
  ],
  exports: [
    RegisterComponentComponent
  ]
})
export class RegisterModule { }
