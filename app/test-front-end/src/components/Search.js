import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setList, filterHero } from "../actions";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import "../assets/sass/components/SearchView.scss";
/* Vista de la barra del vuscador mas metodo que filtra por el elemento de redux */
const Search = () => {
  const [busqueda, setBusqueda] = useState("");
  const dispatch = useDispatch();

  const table = useSelector((state) => state.heroList);

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  const filtrar = (nombre) => {
    dispatch(filterHero());
    var result = table.filter((e) => {
      if (e.nombre.toString().toLowerCase().includes(nombre.toLowerCase())) {
        return e;
      }
    });

    result.map((d) => {
      dispatch(setList(d));
  
    });
  };

  return (

    <div className="search">
      <div className="box">
        <div className="container-1">
          <span className="icon">
            {" "}
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="search"
            id="search"
            value={busqueda}
            onChange={handleSearch}
            placeholder="Buscar contato"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
