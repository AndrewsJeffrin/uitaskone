import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { FormArray } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements AfterViewInit {
  
  //public paginator!: MatPaginator;
  //value: string[]=[];
  //objarray: MyObjClass[] = [];
  displayedColumns: string[]=['Name','Email','AddresslineOne','AddresslineTwo','country','state','district']

  dataSource=new MatTableDataSource<userDetails>();
  
   constructor() { 
  
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  retriveddata!:any;
 // pieces: Piece[] = [];
  ngAfterViewInit() {
    this.dataSource.paginator=this.paginator,
    //console.log(localStorage.getItem('userdetails'));
     this.retriveddata=JSON.parse(localStorage.getItem('userdetails')|| '[]');
     
    console.log(this.retriveddata);
    this.dataSource=this.retriveddata as any;
  }
  
}
export interface userDetails {
  Name: string;
  Email:string;
  AddresslineOne:string;
  AddresslineTwo:string;
  country:string;
  state:string;
  district:string;
}
// const ELEMENT_DATA: userDetails[] = [
//   {Name:'andrews',Email:"ssssssss",AddresslineOne:'main raoad palamedu',AddresslineTwo:'madurai',country:'indai',state:'tamil nadu',district:'madurai'}, 
// ];
