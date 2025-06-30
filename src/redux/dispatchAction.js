import {
  ADD_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
} from "./types";
import { v4 as uuidv4 } from "uuid";

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: {
    id: uuidv4(),
    todoName: data,
    todoCompleted: false,
  },
});

export const fetchTodos = (url) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_TODOS_REQUEST,
    });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_TODOS_FAILURE,
        payload: error.message,
      });
    }
  };
};
