import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../getData.service';
import {Students_data} from '../students_data';
import { PostDataService } from "app/post-data.service";

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {
  
  private students_data: Students_data[];
  student_created_server_response: any;
  //another_student = "Dasha";

  another_student : Students_data = {
      
      firstName: "Edward",
      lastName: "Tompson",
      email: "edward_tompson@gmail.com",
      telNumber: "0657439279",
      inGroup: 1
  }; 

  constructor(
    private _getDataService : GetDataService,
    private _postDataService : PostDataService
    ) {}

  ngOnInit() {
        this._getDataService.getStudentsData().subscribe(students_data =>{
        this.students_data = students_data;
          });

          //this._postDataService.createStudent(this.another_student).subscribe(res => this.student_created_server_response = res.success);


  }

    addTodo(){
           /* this.students_data.push({
              text: this.deer
            }); */
    }

    deleteTodo(todoText){
             for(var i = 0; i < this.students_data.length; i++){
                if(this.students_data[i] == todoText){
                  this.students_data.splice(i, 1);
                }
              } 
    }

}
