import React from "react";
import "./sass/pagination.scss";
function Pagination({ pages, setCurrentPage, currentPage }) {
  let arr = [];
  for (let i = 1; i <= pages; i++) {
    arr.push(i);
  }

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div style={{ display: "flex", margin: "1rem", justifyContent: "center" }}>
      {arr.map((page, key) => {
        return (
          <div className="pagination" onClick={() => onPageChange(page)}>
            {currentPage === page ? (
              <span style={{ color: "yellow" }}> {page}</span>
            ) : (
              <span> {page}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
