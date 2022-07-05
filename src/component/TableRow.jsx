function TableRow(props) {
  var list = [];
  list.push();
  for (var key in props.data) list.push(<td>{props.data[key]}</td>);

  return list;
}
export default TableRow;
