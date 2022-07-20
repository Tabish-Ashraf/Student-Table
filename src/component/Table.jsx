import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { useState, useContext } from "react";

import StudentContext from "./Context/studentContext";
const Table = ({ filterStr }) => {
  const [isdelete, setDelete] = useState(false);
  const [sortType, setSortType] = useState("des");

  const array = useContext(StudentContext);

  let i = 1;
  return (
    <>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr key="sa">
            <TableHeader data={array[0]} handleSort={handleSort} />
          </tr>
        </thead>

        <tbody>
          {array.map((row) => (
            <tr key={i++}>
              <TableRow data={row} filterStr={filterStr} onDelete={onDelete} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
  function onDelete(id) {
    array.forEach((element, index, array) => {
      if (element.ID === id) {
        array.splice(index, 1);
      }
    });
    if (isdelete === false) setDelete(true);
    else setDelete(false);
  }
  function handleSort(e) {
    const arr = array[0];
    if (isNaN(arr[e.target.innerHTML])) {
      if (sortType === "des") {
        array.sort(function (a, b) {
          var nameA = a[e.target.innerHTML].toUpperCase();
          var nameB = b[e.target.innerHTML].toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        });
        setSortType("asc");
      } else {
        array.sort(function (a, b) {
          var nameA = b[e.target.innerHTML].toUpperCase();
          var nameB = a[e.target.innerHTML].toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        });
        setSortType("des");
      }
    } else if (sortType === "asc") {
      array.sort((a, b) => {
        return b[e.target.innerHTML] - a[e.target.innerHTML];
      });
      setSortType("des");
    } else {
      array.sort((a, b) => {
        return a[e.target.innerHTML] - b[e.target.innerHTML];
      });
      setSortType("asc");
    }
  }
};

export default Table;
