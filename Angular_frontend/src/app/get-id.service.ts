import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Students_data} from './students_data';

@Injectable()
export class GetIdService {
  
  private searchUrl = 'http://127.0.0.1:5000/getDetails';

  constructor(private http: Http) { }

   getDetails(id): Observable<Students_data>{
    return this.http.get(this.searchUrl + '?' + 'id=' + id)
                    .map((res) => res.json())
                   
  }


}
