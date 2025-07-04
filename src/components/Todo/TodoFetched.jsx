import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../../redux/slice/fetchTodoSlice";
import { fetchPosts } from "../../api/fetchPosts";
import { todoFetchedApiSelector } from "../../redux/selectors";
const TodoFetched = () => {
  const dispatch = useDispatch();
  const fetchedData = useSelector(todoFetchedApiSelector);
  console.log(fetchedData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await fetchPosts(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        if (posts) {
          dispatch(fetchTodos({ todos: posts }));
        }
      } catch (err) {
        dispatch(fetchTodos({ error: err }));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <ul>
        {fetchedData.todos &&
          fetchedData.todos.map((todo, index) => (
            <li key={index} style={{ textAlign: "left" }}>
              {todo.title} {todo.completed ? "✅" : ""}
            </li>
          ))}
      </ul>
    </>
  );
};

export default TodoFetched;
