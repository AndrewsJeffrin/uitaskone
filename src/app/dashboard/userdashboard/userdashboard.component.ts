import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:number=1;

  // changeTheme(): any{
  //   if(this.value===4){
  //     this.value=4;
  //   }else if(this.value===2){
  //     this.value=2
  //   }else if(this.value===3){
  //     this.value=3
  //   }else{
  //     this.value===this.value
  //   }

  // }
  themeOne(){
    this.value=1
  }
  themeTwo(){
    this.value=2
  }
  themeThree(){
    this.value=3
  }
  themeFour(){
    this.value=4
  }

}
