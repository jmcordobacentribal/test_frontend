import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../assets/sass/components/Hero.scss";
import ErrorPage from "./ErrorPage";
import Modal from "./ModalCard";
import Paginate from "./Paginate";

/* Vista de el listado de heroes  */
const Hero = ({ canFly }) => {
  useEffect(() => {
    setCurrentFly([]);
  }, []);

  const hero = useSelector((state) => state.hero);
  const [currentPage, setCurrentPage] = useState(1);
  const [proposalsPerPage] = useState(6);
  const [active, setActive] = useState(null);
  const indexOfLastProposal = currentPage * proposalsPerPage;
  const indexOfFirstProposals = indexOfLastProposal - proposalsPerPage;
  const current = hero.slice(indexOfFirstProposals, indexOfLastProposal);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");
  const [currentFly, setCurrentFly] = useState([]);

  /* Levanta Modal */
  const handleUp = (data) => {
    setShow(true);
    setData(data);
  };
  const handleDown = () => {
    setShow(false);
  };
  useEffect(() => {
    if (canFly === true) {
      setCurrentFly([]);
      const currents = current.filter(function (element) {
        return element.puedeVolar === true;
      });

      setCurrentFly(currents);
    }
  }, [canFly]);

  return (
    <div className="wrapper">
      <Modal
        show={show}
        setShow={setShow}
        handleDown={handleDown}
        data={data}
        setData={setData}
      />

      {
        /* Dependiendo si vuela o no  */
        canFly === true ? (
          <>
            {currentFly.length>0 ? currentFly.map((data, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i} bg="dark">
                  <Card.Img variant="top" src={data.avatarURL} />
                  <Card.Body>
                    <Card.Title>{data.nombre}</Card.Title>

                    <Button
                      variant="primary"
                      onClick={() => {
                        handleUp(data);
                      }}
                    >
                      Ver información
                    </Button>
                  </Card.Body>
                </Card>
              );
            }) : <ErrorPage/>}
            {hero < 1 ? null : (
              <Paginate
                proposalsPerPage={proposalsPerPage}
                current={current}
                totalProposals={hero.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                act={active}
                setActive={setActive}
              />
            )}
          </>
        ) : (
          <>
            
            {current.length > 0 ? current.map((data, i) => {
              return (
                <Card style={{ width: "18rem" }} key={i} bg="dark">
                  <Card.Img variant="top" src={data.avatarURL} />
                  <Card.Body>
                    <Card.Title>{data.nombre}</Card.Title>

                    <Button
                      variant="primary"
                      onClick={() => {
                        handleUp(data);
                      }}
                    >
                      Ver información
                    </Button>
                  </Card.Body>
                </Card>
              );
            }) : <ErrorPage/>}
            {hero < 1 ? null : (
              <Paginate
                proposalsPerPage={proposalsPerPage}
                current={current}
                totalProposals={hero.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                act={active}
                setActive={setActive}
              />
            )}
          </>
        )
      }
    </div>
  );
};

export default Hero;
