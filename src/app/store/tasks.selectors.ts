import { createFeatureSelector, createSelector } from "@ngrx/store";
import {State} from "./tasks.reducer"

export namespace TasksSelector {
  export  const state = createFeatureSelector<State>("tasks")

  export const tasks = createSelector(state, (state) => state.tasks)
}
