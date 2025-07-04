export const todoFetchedApiSelector = (state) => state.todosApi;
export const isLoggedInSelector = (state) => state?.auth?.isLoggedIn;
export const userSelector = (state) => state?.auth?.user;
export const todosSelector = (state) => state?.todos;

