import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function MovieApp() {
  return (
    <Router>
      <Routes>
        <Route path="/movie" element={<Detail />} />
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<h1>Hello</h1>} />
      </Routes>
    </Router>
  );
}
export default MovieApp;
