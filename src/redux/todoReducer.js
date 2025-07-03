// import {
//   ADD_TODO,
//   FETCH_TODOS_REQUEST,
//   FETCH_TODOS_SUCCESS,
//   FETCH_TODOS_FAILURE,
// } from "./types";
// const initialState = {
//   todos: [],
//   todosAPI: {
//     todos: [],
//     loading: false,
//     error: null,
//   },
// };
// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };
//     case FETCH_TODOS_REQUEST:
//       return {
//         ...state,
//         todosAPI: {
//           ...state.todosAPI,
//           loading: true,
//           error: null,
//         },
//       };
//     case FETCH_TODOS_SUCCESS:
//       return {
//         ...state,
//         todosAPI: {
//           ...state.todosAPI,
//           todos: action.payload,
//           loading: false,
//           error: null,
//         },
//       };
//     case FETCH_TODOS_FAILURE:
//       return {
//         ...state,
//         todosAPI: {
//           ...state.todosAPI,
//           loading: false,
//           error: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default todoReducer;
