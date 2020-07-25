import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from "@angular/forms";

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { NgbModule }         from '@ng-bootstrap/ng-bootstrap';

import { AutofocusFixModule }      from 'ngx-autofocus-fix';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule(
  {
    declarations: [
      AppComponent,
      TodoListComponent
    ],
    imports:      [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      FormsModule,
      AutofocusFixModule.forRoot(),
      BrowserAnimationsModule
    ],
    providers:    [],
    bootstrap:    [AppComponent]
  }
)
export class AppModule {
}
