import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Students_data} from './students_data';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class PostDataService {

private studentsDataUrl = 'http://127.0.0.1:5000/createStudent?';

  constructor(private http: Http) { }


  createStudent(student: Students_data): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
      let options = new RequestOptions({ headers: headers });
      let email = student.email;
      let first_name = student.firstName;
      let last_name = student.lastName;
      let in_group = student.inGroup;
      let tel_number = student.telNumber;

      const a_new_student = 'email=' +  email + '&' + 'first_name=' + first_name + '&' + 'last_name=' + last_name + '&' + 'in_group=' + in_group + '&' + 'tel_number=' + tel_number;
      
      return this.http.post(this.studentsDataUrl + a_new_student, options)
                    .map(res => res.json());
                    

  }


}
