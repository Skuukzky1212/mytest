import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isLoggedInSelector } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slice/authSlice";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");

  const dispatchAuth = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLoggedInSelector);
  if (isLoggedIn) return <Navigate to="/" />;

  const handleOnChangeTextField = (e, setValue) => {
    setValue(e.target.value);
    setError("");
  };

  const mockUser = {
    username: "admin",
    password: "123456",
    name: "Vuong",
  };

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === mockUser.username && pwd === mockUser.password) {
      dispatchAuth(
        login({
          user: mockUser.name,
          token: "bearer abc.token.mock",
        })
      );
      navigate("/", { replace: true });
    } else {
      setError("Invalid credentials");
    }
  };
  return (
    <div>
      <h1>Login!</h1>
      <form onSubmit={handleLogin}>
        <label style={{marginRight: "10px"}} htmlFor="userName">User name</label>
        <input
          id="userName"
          type="text"
          placeholder="Enter your user name..."
          value={username}
          autoComplete="false"
          onChange={(e) => {
            handleOnChangeTextField(e, setUsername);
          }}
        />
        <br />
        <label style={{marginRight: "10px"}} htmlFor="pwd">Password</label>
        <input
          id="pwd"
          type="password"
          placeholder="Enter your password..."
          autoComplete="false"
          value={pwd}
          onChange={(e) => {
            handleOnChangeTextField(e, setPwd);
          }}
        />
        <br />
        <button style={{marginTop: "20px"}} type="submit">Login now</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
