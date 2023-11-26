import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  editdata:any;
  inputdata:any;
  submitted = false;
  closemessage = 'close using directive'
  constructor( @Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<PopupComponent>,private builder:FormBuilder,private service:MasterService){

  }
  get f() { return this.myform.controls; }
  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.studentId >0){
      this.setpopupdata(this.inputdata.code)
    }

  }
  closepopup(){
    this.ref.close('Closed using function');
  }
    myform = this.builder.group({
    studentName:['', [Validators.required]],
    description:['', [Validators.required]],
    dateOfBirth:this.builder.control(new Date()),
  })
  SaveStudent(){
    this.service.SaveStudent(this.myform.value).subscribe(res=>{
      this.closepopup();
    });
    }
    clearform()
    {
      this.myform.reset()
    }
    setpopupdata(code:any){
      this.service.GetStudentById(code).subscribe(item=>{
        this.editdata= item;
        this.myform.setValue({studentName:this.editdata.studentName,description :this.editdata.description,dateOfBirth:this.editdata.dateOfBirth})
      })
    }
}

