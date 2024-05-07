import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Shop from "./components/Shop";
import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-tr from-violet-700 to-indigo-700 min-h-screen text-black">
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
