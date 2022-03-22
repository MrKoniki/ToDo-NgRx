import { Component } from '@angular/core';
import {Store} from "@ngrx/store";

import { TasksActions } from "./store/tasks.actions";
import {Observable} from "rxjs";
import {TasksSelector} from "./store/tasks.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ToDo';
  tasks$: Observable<string[]>

  constructor(
    private store$: Store,
  ) {
    this.tasks$ = this.store$.select(TasksSelector.tasks)

  }

  addTask(value: string) {
    console.log(this.tasks$)
    this.store$.dispatch(TasksActions.addTask({task: value}))
  }

  completeTask(value: any) {
    console.log(value)
  }

  deleteTask(index: any) {
  }
}
