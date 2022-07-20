import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import StudentForm from "./component/StudentForm";
import NavBar from "./component/Navbar/NavBar";
import About from "./component/About";
import Products from "./component/Products";
import StudentContext from "./component/Context/studentContext";
import arr from "./StudentJson.json";
function App() {
  const Array = arr.Full;

  return (
    <>
      <StudentContext.Provider value={Array}>
        <NavBar />

        <Routes>
          <Route path="/about/:id?" element={<About />} />
          <Route path="/about" element={<About msg="hello world" />} />
          <Route path="/products" element={<Products msg="Products" />} />
          <Route path="/form" exact element={<StudentForm />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </StudentContext.Provider>
    </>
  );
}

export default App;
