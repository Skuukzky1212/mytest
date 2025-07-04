import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/authSlice";
import { userSelector } from "../redux/selectors";
import PostsList from "../components/PostsList";

export default function HomePage() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome, {user}</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <h1>Data React query fetched below!</h1>
      <PostsList />
    </div>
  );
}
