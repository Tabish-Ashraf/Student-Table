import Table from "./Table";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [filterStr, setFilterStr] = useState("");

  return (
    <>
      <div className="container mt-3">
        <h2>Student Table</h2>
        <label>Search</label>
        <input
          id="search"
          type="text"
          className=" col-2 mx-3 mb-3 border input-lg rounded justify-content-center"
          onChange={(e) => {
            setFilterStr(e.target.value.trim().toUpperCase());
          }}
        ></input>
        <Link to="/form" state={{ task: "create", from: "button" }}>
          <button type="button" className="btn btn-info">
            Create
          </button>
        </Link>

        <Table filterStr={filterStr} />
      </div>
    </>
  );
};
export default Home;
