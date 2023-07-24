import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Authentication from "./components/Authentication";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Authentication />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
