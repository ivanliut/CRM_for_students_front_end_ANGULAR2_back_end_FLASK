import { Component, OnInit } from '@angular/core';
import { SearchStudentsService } from "app/search-students.service";
import {Students_data} from '../students_data';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private searcRes: Students_data[];
private searchStr:string;

  constructor( private searchStudentsService : SearchStudentsService) { }

  ngOnInit() {
  }

  searchStudent(){
      if(this.searchStr.trim() != ''){
          this.searchStudentsService.search(this.searchStr).subscribe(res => this.searcRes = res);
      }
   }

}
