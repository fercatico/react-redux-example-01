import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: "1",
      title: "Task 1",
      description: "Task 1 description",
      completed: false,
    },
    {
      id: "2",
      title: "Task 2",
      description: "Task 2 description",
      completed: false,
    },
  ],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.push(action.payload);
    },
    deleteTask: (state, action) => {
      //state.value -= 1
      const taskFound = state.value.find((task) => task.id === action.payload);
      if (taskFound) {
        state.value.splice(state.value.indexOf(taskFound), 1);
      }
    },
    editTask: (state, action) => {
      //state.value += action.payload
      const { id, title, description } = action.payload;
      const taskFound = state.value.find((task) => task.id === id);
      if (taskFound) {
        taskFound.title = title;
        taskFound.description = description;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
