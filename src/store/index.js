import { configureStore, createSlice } from "@reduxjs/toolkit";
const loadState = () => {
  try {
    const localState = localStorage.getItem("tasks");
    if (localState === null) {
      return [];
    }
    return JSON.parse(localState);
  } catch (err) {
    return [];
  }
};

const initialState = {
  tasks: loadState(),
  filter: "all"
};

const todoSlices = createSlice({
  name: "taskmanager",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }
  }
});

const store = configureStore({
  reducer: { tasksmanager: todoSlices.reducer }
});
export const todoActions = todoSlices.actions;
export default store;
