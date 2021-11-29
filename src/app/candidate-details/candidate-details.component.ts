import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  id: any;
  Formsubmission = [];
  personalForm = new FormGroup({
    profile_picture: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    hobbies: new FormControl(''),
    
    
    
  });

  educationForm = new FormGroup({
    institute: new FormControl(''),
    degree: new FormControl(''),
    percentage: new FormControl(''),
    pass_out_year: new FormControl(''),
  });

  skillsForm = new FormGroup({
    name: new FormControl(''),
    experience: new FormControl(''),
  });

  experienceForm = new FormGroup({
    company: new FormControl(''),
    project: new FormControl(''),
    role: new FormControl(''),
    team_size: new FormControl(''),
    duration_from: new FormControl(''),
    duration_to: new FormControl(''),
  });
    apiResponse:any=[]
 
  constructor( private route: ActivatedRoute, public http:HttpClient,public router :Router) { 
    if(this.router.getCurrentNavigation()?.extras.state){
      this.id = this.router.getCurrentNavigation()?.extras.state?.user;
    }
  }

  ngOnInit(): void {
    this.http.post("https://60d5a2c2943aa60017768b01.mockapi.io/candidate",this.id).subscribe(res => {
      console.log(res)
      this.apiResponse = res

      this.fetch()
    })
  }
  set(){

  }
  fetch(){
    this.personalForm.get('name')?.setValue(this.apiResponse.name)
  }
}
