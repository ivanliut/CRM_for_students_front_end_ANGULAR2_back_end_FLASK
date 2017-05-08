import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Students_data} from './students_data';

@Injectable()
export class SearchStudentsService {

private searchUrl = 'http://127.0.0.1:5000/search';

  constructor(private http: Http) { }

   search(searchStr): Observable<Students_data[]>{
    return this.http.get(this.searchUrl + '?' + 'searchStr=' + searchStr)
                    .map((res) => res.json())
                   
  }

}
