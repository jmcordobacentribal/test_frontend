import React from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
const ListHeroesCanFly = ({ canFly }) => {
  return (
    <div>
      <Search />

      <Hero canFly={canFly} />
    </div>
  );
};

export default ListHeroesCanFly;
