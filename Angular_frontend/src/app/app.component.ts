import { Component } from '@angular/core';
import {CrmComponent} from './crm/crm.component';
import { GetDataService } from './getData.service';
import { PostDataService } from "app/post-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService, PostDataService]
})
export class AppComponent {
  title = 'app works!';
}
