import { useSelector } from "react-redux";
import { todoSelector } from "../../redux/selectors";

const Todo = () => {
  const todoList = useSelector(todoSelector);
  return (
    <>
      {todoList &&
        todoList.map((todo) => <div key={todo.id}>{todo.todoName}</div>)}
    </>
  );
};

export default Todo;
