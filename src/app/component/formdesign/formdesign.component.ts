import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css']
})
export class FormdesignComponent implements OnInit {
  countrylist=['Vietnam','USA','Singapore','India'];
  termlist=['15days','30days','60days','120days'];

  constructor(private builder:FormBuilder){

  }
  ngOnInit(): void {
    this.studentform.setValue({name:'Nguyen Duc Bao Son',email:'baoson20022001@gmail.com',phone:'1234567890',country:'USA',term:'60days',address:'add1',dob:new Date(2001,2,20),gender:'Male',status:true})  
  }

  studentform= this.builder.group({
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.required])),
    phone:this.builder.control('',Validators.required),
    country:this.builder.control('',Validators.required),
    address:this.builder.control('',Validators.required),
    term:this.builder.control('',Validators.required),
    dob:this.builder.control(new Date()),
    gender:this.builder.control('Male'),
    status:this.builder.control(true),
  });

  SaveStudent(){
    console.log(this.studentform.value)
  }
  clearform()
  {
    this.studentform.reset()
  }
}
