import { useSelector } from "react-redux";
import { todosSelector } from "../../redux/selectors";

const Todo = () => {
  const todoList = useSelector(todosSelector);
  return (
    <>
      {todoList &&
        todoList.map((todo) => <div key={todo.id}>{todo.todoName}</div>)}
    </>
  );
};

export default Todo;
