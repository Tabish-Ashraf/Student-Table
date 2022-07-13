function TableHeader(props) {
  let i = 0;
  var list = [];
  list.push();
  for (var key in props.data)
    list.push(
      <td key={++i} onClick={(e) => props.handleSort(e, props.sortType)}>
        {key}
      </td>
    );
  list.push(<td key={++i}>update</td>);
  list.push(<td key={++i}>delete</td>);

  return list;
}
export default TableHeader;
