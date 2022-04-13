import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../assets/sass/components/Hero.scss";
import Paginate from "./Paginate";

/* Vista de el listado de heroes  */
const Hero = () => {
  const data = useSelector((state) => state.hero);

  return (
    <div className="wrapper">
      {data.map((data, i) => {
        return (
          <Card style={{ width: "18rem" }} key={i} bg="dark">
            <Card.Img variant="top" src={data.avatarURL} />
            <Card.Body>
              <Card.Title>{data.nombre}</Card.Title>
              {/*   <Card.Text>

                {data.puedeVolar === true ? <h6>Puede volar: si</h6> : <h6>Puede volar: no</h6> }
                <h6>Nombre real : {data.nombreReal}</h6>
                
               </Card.Text> */}
              <Button variant="primary">Ver información</Button>
            </Card.Body>
          </Card>
        );
      })}

      <Paginate />
    </div>
  );
};

export default Hero;
