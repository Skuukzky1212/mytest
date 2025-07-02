import "./App.css";
import { HomePage, NotFoundPage, TodoPage, LoginPage } from "./pages";

import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        index
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
