import "./App.css";
import { HomePage, NotFoundPage, TodoPage } from "./pages";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
