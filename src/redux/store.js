import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import todoReducer from "./slice/todoSlice";
import fetchTodoReducer from "./slice/fetchTodoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
    todosApi: fetchTodoReducer,
  },
});

export default store;
