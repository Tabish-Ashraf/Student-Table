function TableHeader(props) {
  var list = [];
  list.push();
  for (var key in props.data)
    list.push(
      <td onClick={(e) => props.handleSort(e, props.sortType)}>{key}</td>
    );
  list.push(<td>update</td>);
  list.push(<td>delete</td>);

  return list;
}
export default TableHeader;
