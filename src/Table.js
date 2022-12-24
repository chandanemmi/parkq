import React from "react";
import { useSelector } from "react-redux";
import "./sass/table.scss";
function Table({ currentPage, PerPageRows }) {
  // getting data from redux store
  const userDetails = useSelector((state) => state.ourState.UserDetails);
  const searchField = useSelector((state) => state.ourState.searchField);
  const selectO = useSelector((state) => state.ourState.selectO);
  console.log(searchField, "  ", selectO);
  let filterData;
  if (selectO) {
    if (!searchField) {
      filterData = userDetails;
    } else {
      filterData = userDetails.filter((item) =>
        item[selectO].includes(searchField)
      );
    }

    console.log(filterData);
  }

  if (userDetails === undefined || userDetails === null) return "Redux store";
  return (
    <div className="table">
      <div className="flexbox-item header">
        <div className="item">Name</div>
        <div className="item">Position</div>
        <div className="item">Office</div>
      </div>
      {filterData.length > 0 &&
        Object.values(filterData)
          .slice(
            currentPage * PerPageRows - PerPageRows,
            currentPage * PerPageRows
          )
          .filter((item) => item)
          .map((item, index) => {
            return (
              <div className="flexbox-item" key={index}>
                <div className="item">{item.Name}</div>
                <div className="item">{item.Position}</div>
                <div className="item">{item.Office}</div>
              </div>
            );
          })}
      {}
    </div>
  );
}

export default Table;
