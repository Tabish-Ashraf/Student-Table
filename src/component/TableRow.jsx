import { Link } from "react-router-dom";
function TableRow(props) {
  let i = 1;
  var list = [];
  let arr = Object.values(props.data);
  arr = arr.map((item) => {
    return item.toUpperCase();
  });
  let d = props.data;
  if (arr.includes(props.filterStr.trim()) || props.filterStr === "") {
    for (var key in props.data) list.push(<td key={++i}>{props.data[key]}</td>);
    list.push(
      <td key={++i}>
        <Link to="/form" state={{ data: d, task: "update" }}>
          <button type="button" className="btn btn-info">
            update
          </button>
        </Link>
      </td>
    );
    list.push(
      <td
        key={++i}
        onClick={() => {
          props.onDelete(d.ID);
        }}
      >
        <button type="button" className="btn btn-danger">
          delete
        </button>
      </td>
    );
  }
  return list;
}
export default TableRow;
