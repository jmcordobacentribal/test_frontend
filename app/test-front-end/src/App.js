import React, { useState } from "react";
import ListHeroes from "./page/ListHeroes";
import ListHeroesCanFly from "./page/ListHeroesCanFly";
import "./assets/sass/App.scss";
import { Button } from "react-bootstrap";

/* pagina principal Aqui iran todas las vistas  */
const App = () => {
  const [canFly, setCanFly] = useState(false);
  return (
    <div>
      <h1 className="title">Superheroes</h1>
      <p className="categoria">
        <Button onClick={() => setCanFly(true)}>Ver solo los que vuelan</Button>
        <br></br>
        <Button onClick={() => setCanFly(false)}>
          Ver todos los superheroes
        </Button>
      </p>

      {canFly === false ? (
        <ListHeroes canFly={canFly} />
      ) : (
        <ListHeroesCanFly canFly={canFly} />
      )}
    </div>
  );
};
export default App;
