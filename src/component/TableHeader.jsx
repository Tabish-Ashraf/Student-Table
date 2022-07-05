function TableHeader(props) {
  var list = [];
  list.push();
  for (var key in props.data) list.push(<td>{key}</td>);

  return list;
}
export default TableHeader;
