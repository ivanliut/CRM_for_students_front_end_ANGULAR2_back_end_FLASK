import { Component, OnInit } from '@angular/core';
import { GetIdService } from "app/get-id.service";
import { Students_data } from '../students_data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {

  private students_data: Students_data;

  constructor(
    private getIdService : GetIdService,
    private route : ActivatedRoute
    ) { }

  ngOnInit() {

        // let's get id from route parameters and the info associated from backend endpoint
        this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
             this.getIdService.getDetails(id).subscribe(students_data =>{
              this.students_data = students_data;
          });
        })

       

  }

}
