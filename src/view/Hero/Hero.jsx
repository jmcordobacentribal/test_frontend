import React, { useState, useEffect } from "react";
import Cards from "../../Components/Cards/Cards";

const Hero = ({ buscar, category }) => {
  const [heroes, setHeroes] = useState([]);
  const [active, setActive] = useState([]);

  let url = "https://data-heroes.herokuapp.com/superheroes?name_like=";

  useEffect(() => {
    switch (category) {
      case "voladores":
        setHeroes(heroes.filter((hero) => hero.puedeVolar === true));
        break;

      case "novoladores":
        setHeroes(active.filter((hero) => hero.puedeVolar === false));
        break;

      default:
        fetch(`${url}${buscar}`)
          .then((response) => response.json())
          .then((data) => {
            setHeroes(data);
            setActive(data);
          });
        break;
    }
  }, [buscar, url, category]);

  return (
    <div className="cont-card">
      {heroes.length ? (
        heroes.map((heroe) => <Cards key={heroe.id} heroe={heroe} />)
      ) : (
        <div>
          <h1>No hay resultados</h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
