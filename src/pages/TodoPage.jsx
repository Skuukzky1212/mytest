import { useState } from "react";
import { useDispatch } from "react-redux";
// import { addTodo } from "../redux/dispatchAction";
import Todo from "../components/Todo/Todo";
// import TodoFetched from "../components/Todo/TodoFetched";
import { addTodo } from "../redux/slice/todoSlice";
export default function TodoPage() {
  const [todo, setTodo] = useState("");

  const dispatchTodo = useDispatch();

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };
  const handleAddTodo = () => {
    dispatchTodo(
      addTodo({
        todoName: todo,
      })
    );
    setTodo("");
  };
  return (
    <>
      <h1>TO DO LIST</h1>
      <Todo />
      <div>
        <input
          onChange={handleInputChange}
          value={todo}
          type="text"
          placeholder="Place your todo here!"
        />
        <button
          className={`${!todo.trim() ? "disable" : ""}`}
          onClick={handleAddTodo}
          style={{ marginLeft: "10px" }}
        >
          Add
        </button>
      </div>
      <h2>TO DO LIST API Fetched!</h2>
      {/* <TodoFetched /> */}
    </>
  );
}
