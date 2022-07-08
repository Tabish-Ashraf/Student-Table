import arr from "../StudentJson.json";
import Table from "./Table";
import { useState } from "react";
const Home = () => {
  const Array = arr.Full;
  const [filterStr, setFilterStr] = useState("");

  return (
    <div className="container mt-3">
      <h2>Student Table</h2>
      <label for="search">Search</label>
      <input
        id="search"
        type="text"
        className=" col-2 mx-3 mb-3 border input-lg rounded justify-content-center"
        onChange={(e) => {
          setFilterStr(e.target.value.trim().toUpperCase());
        }}
      ></input>
      <button
        type="button"
        class=" col-2 mx-3 mb-3 btn btn-default border rounded justify-content-center"
      >
        Create
      </button>

      <Table array={Array} filterStr={filterStr} />
    </div>
  );
};
export default Home;
