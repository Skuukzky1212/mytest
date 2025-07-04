import { useSelector } from "react-redux";
import { todosSelector } from "../../redux/selectors";

const Todo = () => {
  const todoList = useSelector(todosSelector);
  return (
    <>
      {todoList.length > 0 && (
        <p>
          New added:{" "}
          {todoList.map((todo, index) => (
            <span key={todo.id}>
              {todo.todoName}
              {index < todoList.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      )}
    </>
  );
};

export default Todo;
