import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../view/Hero/Hero";
const Home = () => {
  const [buscar, setBuscar] = useState("");
  const [category, setcategory] = useState("");

  return (
    <div>
      <Navbar setBuscar={setBuscar} setcategory={setcategory} />
      <Hero buscar={buscar} category={category} />
    </div>
  );
};

export default Home;
