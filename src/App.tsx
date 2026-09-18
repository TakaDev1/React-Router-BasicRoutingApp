import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./compoentns/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <h1>React-Router-BasicRoutingApp</h1>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
