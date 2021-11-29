import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  id: any;

  constructor( private route: ActivatedRoute, public http:HttpClient,public router :Router) { 

  }

  ngOnInit(): void {
    this.http.get("https://60d5a2c2943aa60017768b01.mockapi.io/candidate").subscribe(res =>{
      console.log('res =',res)
      this.apiResponse = res
    })
  }

  addAlias(){
  
    var reqObj = 
    {
      personal : this.personalForm.value,
      education : this.educationForm.value,
      skills: this.skillsForm.value,
      experience  : this.experienceForm.value
    }
      // profile_picture :  this.personalForm.value.profile_picture,
      // name :  this.personalForm.value.name,
      // address :  this.personalForm.value.address,
      // phone :  this.personalForm.value.phone,
      // email :  this.personalForm.value.email,
      // gender :  this.personalForm.value.gender,
      // hobbies :  this.personalForm.value.hobbies,
        
      // institute :  this.educationForm.value.institute,
      // degree :  this.educationForm.value.degree,
      // percentage :  this.educationForm.value.percentage,
      // pass_out_year :  this.educationForm.value.pass_out_year,
      // skillname :  this.skillsForm.value.skillname,
      // experience :  this.skillsForm.value.experience,

      // company :  this.experienceForm.value.company,
      // project :  this.experienceForm.value.project,
      // role :  this.experienceForm.value.role,
      // team_size :  this.experienceForm.value.team_size,
      // duration_from :  this.experienceForm.value.duration_from,
      // duration_to :  this.experienceForm.value.duration_to,

    
    console.log(reqObj)
      this.http.post("https://60d5a2c2943aa60017768b01.mockapi.io/candidate",reqObj).subscribe(res => {
        console.log(res)
      })
  }
}
