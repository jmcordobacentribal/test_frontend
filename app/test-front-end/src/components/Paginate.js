import React from "react";
import Pagination from "react-bootstrap/Pagination";

import "../assets/sass/components/Pagination.scss";

const pagination = ({
  proposalsPerPage,
  totalProposals,
  paginate,
  current,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProposals / proposalsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <Pagination className="button.icons">
        <p>
          1- {current.length} de {totalProposals} registros{" "}
        </p>
        <Pagination.First onClick={() => paginate(1)}>Primera</Pagination.First>
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
        {pageNumbers.map((number, i) => {
          const active = currentPage;
          return (
            <Pagination.Item
              key={i}
              active={number === active}
              onClick={() => paginate(number)}
            >
              {number}
            </Pagination.Item>
          );
        })}
        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
        <Pagination.Last onClick={() => paginate(pageNumbers.length)}>
          Última
        </Pagination.Last>
      </Pagination>
    </div>
  );
};

export default pagination;
