function TableRow(props) {
  var list = [];
  let arr = Object.values(props.data);
  arr = arr.map((item) => {
    return item.toUpperCase();
  });

  if (arr.includes(props.filterStr.trim()) || props.filterStr === "") {
    for (var key in props.data) list.push(<td>{props.data[key]}</td>);
  }
  return list;
}
export default TableRow;
