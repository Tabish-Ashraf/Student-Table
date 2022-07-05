import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import arr from "../src/StudentJson.json";
import Table from "./component/Table";
function App() {
  const Array = arr.Full;
  return (
    <div className="container mt-3">
      <h2>Student Table</h2>
      <Table array={Array} />
    </div>
  );
}

export default App;
