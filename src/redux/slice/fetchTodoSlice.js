import { createSlice } from "@reduxjs/toolkit";
const fetchTodoSlice = createSlice({
  name: "todoApi",
  initialState: {
    todos: [],
    error: null,
  },
  reducers: {
    fetchTodos: (state, action) => {
      {
        if (action.payload.todos) {
          state.todos = action.payload.todos;
        }
        state.error = action.payload.error;
      }
    },
  },
});

export const { fetchTodos } = fetchTodoSlice.actions;

export default fetchTodoSlice.reducer;
