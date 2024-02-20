import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
