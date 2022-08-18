import "./App.css";
import Home from "./components/Home";
import Listen from "./components/Listen";
import Watch from "./components/Watch";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listen" element={<Listen></Listen>}></Route>
        <Route path="/watch" element={<Watch></Watch>}></Route>
      </Routes>
    </div>
  );
}

export default App;
