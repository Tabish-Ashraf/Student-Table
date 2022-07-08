import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import StudentForm from "./component/StudentForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<StudentForm />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
// function filtered(e) {
//    let flag = false;
//    Array.forEach(filtering);
//    function filtering(std, index) {
//      flag = false;
//      for (var key in std) {
//    if (std[key].includes(e.target.value.trim())) flag = true;
//        //console.log(e.target.value, flag);
//      }
//      if (flag === false) {
//        console.log(index);
//        Array.splice(index, 1);
//      }
//    }
//    if (isFiltered) {
//      setFiltered(false);
//    } else setFiltered(true);
//    console.log(e.target.value);
//    setFilterStr(e.target.value.trim());
// }

export default App;
