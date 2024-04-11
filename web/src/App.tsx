import { Route, Routes } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";

function App() {
  return (
    <Routes>
        <Route path="/tasks" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;