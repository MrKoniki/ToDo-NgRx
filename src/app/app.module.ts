import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskListComponent } from "./task-list/task-list.component";
import * as fromReducer from "./store/tasks.reducer";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({Tasks: fromReducer.reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
