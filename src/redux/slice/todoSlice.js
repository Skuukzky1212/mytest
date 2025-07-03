import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: uuidv4(),
        todoName: action.payload.todoName,
        todoCompleted: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
