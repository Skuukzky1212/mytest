import { useSelector } from "react-redux";
import { isLoggedInSelector } from "../redux/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(isLoggedInSelector);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children;
}
