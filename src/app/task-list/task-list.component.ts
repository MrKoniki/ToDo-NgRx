import { Component } from '@angular/core';
import { Store } from "@ngrx/store"
import { Observable } from "rxjs";
import { TasksSelector } from "../store/tasks.selectors";

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent {
  title = 'ToDo';

  tasks$: Observable<string[]>

  constructor(private store$: Store) {
    this.tasks$ = this.store$.select(TasksSelector.tasks)
  }

  deleteTask(value: number) {

  }

  completeTask(value: number) {

  }
}
