export const todoSelector = (state) => state?.todosState?.todos;
export const todoFetchedSelector = (state) => state?.todosState?.todosAPI;
export const isLoggedInSelector = (state) => state?.auth?.isLoggedIn;
export const userSelector = (state) => state?.auth?.user