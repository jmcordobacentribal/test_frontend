import React, { useState, useEffect } from "react";
import Cards from "../../Components/Cards/Cards";

const Hero = ({ buscar, category }) => {
  const [heroes, setHeroes] = useState([]);
  const [active, setActive] = useState([]);
  const [loading, setLoading] = useState(true);

  let url = "https://data-heroes.herokuapp.com/superheroes?name_like=";

  const cargar = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    switch (category) {
      case "voladores":
        setHeroes(active.filter((hero) => hero.puedeVolar === true));
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
    cargar();
  }, [buscar, url, category]);

  if (loading) {
    return (
      <div id="contenedor">
        <div class="loader" id="loader">
          Loading...
        </div>
      </div>
    );
  } else {
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
  }
};

export default Hero;
