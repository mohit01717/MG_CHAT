import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
