import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from 'src/app/service/master.service';
import { Student } from 'src/app/Model/student';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  students!: Student[];
  studentsPaginition!: Student[];
  dataSource: any;
  pagination: number = 1;
  studentsPerPage: number = 5;
  public selectedPage = 1;
  public pageNumber: number[] = [];
  maxPageNumber: number = 0;
  displayedColumns: string[] = ['position', 'name', 'dateOfBirth', 'adress', 'status', 'class', 'action'];
  constructor(private student: MasterService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchStudents();
    console.log(this.fetchStudents());
    this.loadStudentPaginition();
  }

  fetchStudents() {
    this.student.StudentPaginition(this.studentsPerPage, this.pagination).subscribe((res: any) => {
      this.students = res.result;
      this.dataSource = new MatTableDataSource<Student>(this.students);
    })
  }
  loadStudentPaginition() {
    this.student.GetStudent().subscribe((res: any) => {
      this.studentsPaginition = res.result;
      this.pageNumber = Array(Math.ceil(this.studentsPaginition.length / this.studentsPerPage)).fill(0).map((x, i) => i + 1);
      this.maxPageNumber = Math.max.apply(null,this.pageNumber);
    });
  }

  openPopupCreate(Id:any,title:any) {
    var _popup = this.dialog.open(PopupComponent, {
      width: '40%',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms',
      data: {
        title: title,
        Id:Id
      }
    });
    _popup.afterClosed().subscribe(item => {
      this.fetchStudents();
    })
  }

  nextPage(){
    this.selectedPage += 1;
    this.pagination +=1;
    this.fetchStudents();
  }

  previousPage()
  {
    this.selectedPage -= 1;
    this.pagination -=1;
    this.fetchStudents();
  }

  changePageSize(event: Event) {
    const newSize = (event.target as HTMLInputElement).value
    this.studentsPerPage = Number(newSize);
    this.changePage(1);
    this.pageNumber = Array(Math.ceil(this.studentsPaginition.length / this.studentsPerPage)).fill(0).map((x, i) => i + 1);
    this.maxPageNumber = Math.max.apply(null,this.pageNumber);
  }

  changePage(page: any) {
    this.selectedPage = page;
    this.pagination = page;
    this.fetchStudents();
  }
  editstudent(studentId:any ){
    this.openPopupCreate(studentId,'Edit Student')
  }
  addstudent(){
    this.openPopupCreate(0,'Create Student')
  }
}

