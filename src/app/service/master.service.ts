import { Injectable } from '@angular/core';
import { colorenity } from '../Entity/colorrnity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Model/student';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  GetColorlist(): colorenity[] {
    return [
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'Blue' },
      { code: 'c5', name: 'Gray' },
    ]
  }
  GetStudent(): Observable<Student[]> {
    return this.http.get<Student[]>("https://localhost:7052/api/StudentAPI");
  }

  SaveStudent(data:any){
    return this.http.post("https://localhost:7052/api/StudentAPI",data);
  }
  
  GetStudentById(code:any){
    return this.http.get("https://localhost:7052/api/StudentAPI/"+code);
  }
  
  StudentPaginition(pageSize:number, pageIndex:number){
    return this.http.get('https://localhost:7052/api/StudentAPI/StudentPagination/'+pageSize+'/'+pageIndex);
  }
}
