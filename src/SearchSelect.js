import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchValue, selectOption } from "./Redux/action";

function SearchSelect() {
  const userDetails = useSelector((state) => state.ourState.UserDetails);
  const [selectValue, setSelectValue] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(selectOption(e.target.value));
  };
  // debounce
  const UpdateDebounce = debounce((valueSearch) => {
    dispatch(searchValue(valueSearch));
  }, 1000);
  function debounce(cb, d) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  }
  const onSearch = (e) => {
    // let value = e.target.value;
    UpdateDebounce(e.target.value);
    // console.log(value);
    // dispatch(searchValue(value));
  };
  return (
    <div>
      <select className="Select" value={selectValue} onChange={handleChange}>
        <option value="Name">Name</option>
        <option value="Office">Office</option>
        <option value="Position">Position</option>
      </select>
      <input
        className="SearchBar"
        onChange={onSearch}
        type="search"
        placeholder="search...."
      />
    </div>
  );
}

export default SearchSelect;
