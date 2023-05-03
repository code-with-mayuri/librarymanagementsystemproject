import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

import { StudentsformComponent } from './addstudents/studentsform/studentsform.component';
import { StudentsListComponent } from './viewstudentsdata/students-list/students-list.component';
import{HttpClientModule} from '@angular/common/http';
import { BooksListComponent } from './viewbooksdata/books-list/books-list.component';
import { BooksformComponent } from './addbooks/booksform/booksform.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReturnbookformComponent } from './addreturnbook/returnbookform/returnbookform.component';
import { LoginComponent } from './librarianmodule/login/login.component';
import { IssuebookformComponent } from './addissuebook/issuebookform/issuebookform.component';
import { IssuebookListComponent } from './viewissuebookdata/issuebooklist/issuebooklist.component';
import { ReturnbookListComponent } from './viewreturnbookdata/returnbook-list/returnbook-list.component';
import { StaffformComponent } from './addstaff/staffform/staffform.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StudentsListComponent,
    StudentsformComponent,
    BooksListComponent,
    BooksformComponent,
    LoginComponent,
    IssuebookformComponent,
    IssuebookListComponent,
    ReturnbookformComponent,
    ReturnbookListComponent,
    StaffformComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
