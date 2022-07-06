import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import arr from "../src/StudentJson.json";
import Table from "./component/Table";
import { useState } from "react";

function App() {
  const Array = arr.Full;
  const [filterStr, setFilterStr] = useState("");

  return (
    <div className="container mt-3">
      <h2>Student Table</h2>

      <input
        type="text"
        className=" col-3"
        onChange={(e) => {
          setFilterStr(e.target.value.trim().toUpperCase());
        }}
      ></input>

      <Table array={Array} filterStr={filterStr} />
    </div>
  );
  // function filtered(e) {
  //    let flag = false;
  //    Array.forEach(filtering);
  //    function filtering(std, index) {
  //      flag = false;
  //      for (var key in std) {
  //    if (std[key].includes(e.target.value.trim())) flag = true;
  //        //console.log(e.target.value, flag);
  //      }
  //      if (flag === false) {
  //        console.log(index);
  //        Array.splice(index, 1);
  //      }
  //    }
  //    if (isFiltered) {
  //      setFiltered(false);
  //    } else setFiltered(true);
  //    console.log(e.target.value);
  //    setFilterStr(e.target.value.trim());
  // }
}

export default App;
