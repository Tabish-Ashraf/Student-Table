import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
const Table = ({ array }) => {
  return (
    <>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <TableHeader data={array[0]} />
          </tr>
        </thead>

        <tbody>
          {array.map((row) => (
            <tr key={row.ID}>
              <TableRow data={row} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
