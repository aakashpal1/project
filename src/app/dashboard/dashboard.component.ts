import { Route } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  person_id: any;
  
  constructor( private route: ActivatedRoute,public http:HttpClient) { 


   }

  ngOnInit(): void {
  }

}
