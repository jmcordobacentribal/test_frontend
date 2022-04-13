import React, { useEffect, useState } from "react";
import useGetHeroe from "../customHook/useGetHeroe";
import Hero from "../components/Hero";
import Search from "../components/Search";
import { useSelector } from "react-redux";
const ListHeroes = () => {
  const { getHeroes } = useGetHeroe();
  const hero = useSelector((state) => state.hero);
  useEffect(() => {
    if (hero < 1) {
      getHeroes();
    }
  }, []);

  return (
    <div>
      <Search />

      <Hero />
    </div>
  );
};

export default ListHeroes;
