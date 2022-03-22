import { Action, createReducer, on } from '@ngrx/store';
import { TasksActions } from "./tasks.actions";

export interface State {
  tasks: string[];
  task?: string;
}

const initialState:State = {
  tasks: [] = [],
}

const tasksReducer = createReducer(
  initialState,
  on(TasksActions.addTask,(state, { task }) =>({
    ...state,
    tasks: [...state.tasks, task],
  }))
)

export function reducer(state:State | undefined, action:Action) {
  return tasksReducer(state,action);
}
