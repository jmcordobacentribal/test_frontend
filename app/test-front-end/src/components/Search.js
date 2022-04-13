import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { setList, filterUser } from "../../actions";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import AddPersonContainer from "../AddPerson/AddPersonContainer";
import "../../assets/sass/components/SearchView.scss";
import { Col, Row } from "react-bootstrap";
/* Vista de la barra del vuscador mas metodo que filtra por el elemento de redux */
const Search = () => {
/*  const dispatch = useDispatch();

  const table = useSelector((state) => state.tableList);

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  const filtrar = (nombre) => {
    dispatch(filterUser());
    var result = table.filter((e) => {
      if (e.name.toString().toLowerCase().includes(nombre.toLowerCase())) {
        return e;
      }
    });
    result.map((d) => {
      dispatch(setList(d));
    });
  };
  */
  return (
    <div>
      <Row>
        <Col>
          <button >
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <input
            className="contact"
         
            placeholder="Buscar contato"
          />
        </Col>
        
      </Row>
    </div>
  );
};

export default Search;
