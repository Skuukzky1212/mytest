import { createSlice } from "@reduxjs/toolkit";
const fetchTodoSlice = createSlice({
  name: "todoApi",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTodoRequest: (state, action) => {},
    fetchTodoSuccess: (state, action) => {},
    fetchTodoError: (state, action) => {},
  },
});

export default fetchTodoSlice.reducer;
