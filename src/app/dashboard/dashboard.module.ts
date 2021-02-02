import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewuserdetailsComponent } from './viewuserdetails/viewuserdetails.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [ ViewuserdetailsComponent, UserdashboardComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,MatIconModule,MatButtonModule,MatSelectModule,MatFormFieldModule
  ],
  exports: [
    UserdashboardComponent,
    ViewuserdetailsComponent
  ]
})
export class DashboardModule { }
