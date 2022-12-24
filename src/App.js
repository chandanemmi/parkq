import "./App.css";
import Table from "./Table";
import data from "./data.json";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "./Redux/action";
import Pagination from "./Pagination";
import SearchSelect from "./SearchSelect";
function App() {
  console.log(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [PerPageRows, setPerPageRows] = useState(5);
  const pages = Math.ceil(data.length / PerPageRows);
  // const searchField = useSelector((state) => state.ourState.searchField);
  // const selectO = useSelector((state) => state.ourState.selectO);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userData(data));
  }, []);
  return (
    <div className="App">
      <SearchSelect />
      <Table currentPage={currentPage} PerPageRows={PerPageRows} />
      <Pagination
        pages={pages}
        data={data}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
