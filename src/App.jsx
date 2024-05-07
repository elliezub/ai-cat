// import { useState } from 'react'
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="bg-gradient-to-tr from-violet-700 to-indigo-700 min-h-screen text-black">
      <NavBar />
      <Hero />
      <Reviews/>
    </div>
  );
}

export default App;
