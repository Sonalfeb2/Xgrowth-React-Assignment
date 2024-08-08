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
    },
    completeTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      const task = state.tasks.filter(task => task.id !== action.payload);
      state.tasks = task

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }
  }
});

const store = configureStore({
  reducer: { taskmanager: todoSlices.reducer }
});
export const todoActions = todoSlices.actions;
export default store;
