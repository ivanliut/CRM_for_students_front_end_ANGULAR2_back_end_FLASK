import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrmComponent } from './crm/crm.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { HomeComponent } from './home/home.component';

import { GetDataService } from "app/getData.service";
import { PostDataService } from "app/post-data.service";
import { SearchStudentsService } from "app/search-students.service";
import { GetIdService } from "app/get-id.service";
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [

    {path: "students",
    component: CrmComponent},
    {path: "students/:id",
    component: StudentsDetailsComponent},
    {path: "",
    component: HomeComponent},
     {path: "/edit/:id",
    component: EditComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    CrmComponent,
    StudentsDetailsComponent,
    HomeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GetDataService, PostDataService, SearchStudentsService, GetIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
