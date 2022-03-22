import { createAction, props } from "@ngrx/store";

export namespace TasksActions {
  export const addTask = createAction(
    "[TASKS] ADD_NEW_TASK",
    props<{task:string}>()
  )
}
