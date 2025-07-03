// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./rootReducer";
// import { thunk } from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import todoReducer from "./slice/todoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
  },
});

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

export default store;
