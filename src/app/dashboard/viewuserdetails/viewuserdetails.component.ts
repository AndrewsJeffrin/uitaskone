import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-viewuserdetails',
  templateUrl: './viewuserdetails.component.html',
  styleUrls: ['./viewuserdetails.component.css']
})
export class ViewuserdetailsComponent implements OnInit {


  rowdata: userDetails[] = [];
  value: any[] =this.rowdata;
  displayedColumns: string[] = ['Name', 'Email', 'AddresslineOne', 'AddresslineTwo', 'country', 'state', 'district']

  dataSource = new MatTableDataSource<userDetails>();
  constructor() { }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  retriveddata!: any;

  ngOnInit(): void {

    this.dataSource.paginator = this.paginator,
    this.retriveddata = (JSON.parse(localStorage.getItem('uservalue') || '[]'));
    
    if (this.retriveddata!=undefined) {
      this.retriveddata.forEach((list: any) => {
         list.addresslist.forEach((listvalue :any) => {
          this.rowdata.push({
            Name: list.firstname,
            Email: list.emailid,
            mobile: list.mobile,
            AddresslineOne: listvalue.addresslineone,
            AddresslineTwo: listvalue.addresslinetwo,
            country: listvalue.country,
            state: listvalue.state,
            district: listvalue.district
          })
         });
      });
    }
    console.log("this.rowdata", this.rowdata)
  }
}
export interface userDetails {
  Name: string;
  Email: string;
  mobile: string;
  AddresslineOne: string;
  AddresslineTwo: string;
  country: string;
  state: string;
  district: string;
}