import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/Model/student';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  students: any;
  dataSource: any;
    displayedColumns: string[] = ["studentId", "studentName", "dateOfBirth", "address", "description", "className", "status"];
  constructor(private student: MasterService) {}
  ngOnInit(): void {
    this.student.GetStudent().subscribe((res:any)=>{
      this.students = res.result
    });
  }
}
