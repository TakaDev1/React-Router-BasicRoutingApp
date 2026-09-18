import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./compoentns/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
        <h1>React-Router-BasicRoutingApp</h1>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
