
import logo from "./logo.svg";
import "./App.css";
import Main from "./views/MainPage";
import Detail from "./views/DetailPage/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/kampanya/:name/:id" element={<Detail/>} />
        </Routes>
      </Router>
  );
}

export default App;
