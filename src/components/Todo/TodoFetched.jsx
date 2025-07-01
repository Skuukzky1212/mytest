import { useDispatch, useSelector } from "react-redux";
import { todoFetchedSelector } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchTodos } from "../../redux/dispatchAction";

const TodoFetched = () => {
  const todoFetchedList = useSelector(todoFetchedSelector);
  const { todos, loading, error } = todoFetchedList;
  const dispatchFetchTodo = useDispatch();
  useEffect(() => {
    dispatchFetchTodo(
      fetchTodos("https://jsonplaceholder.typicode.com/todos?_limit=10")
    );
  }, [dispatchFetchTodo]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textAlign: "left" }}>
            {todo.title} {todo.completed ? "✅" : ""}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoFetched;
