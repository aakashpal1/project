import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, Router, NavigationExtras } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  apiResponse:any=[]

  constructor(public http:HttpClient , public router : Router) { }

  ngOnInit(): void {
    this.http.get("https://60d5a2c2943aa60017768b01.mockapi.io/candidate").subscribe(res =>{
      console.log('res =',res)
      this.apiResponse = res
    })
  }
  candidate(id : any){
    console.log(id)
    let navigationExtras :  NavigationExtras = {
      state : {
        user: id
      }
    }
    this.router.navigate(['candidate'],navigationExtras);

  }
}
