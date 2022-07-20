import { useLocation } from "react-router-dom";
import "./studentStyles.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import StudentContext from "./Context/studentContext";

const StudentForm = () => {
  const array = useContext(StudentContext);
  const location = useLocation();
  var temp = {};
  var task;
  if (location.state === null) {
    task = "create";
  } else if (location.state.task === "create") {
    temp = {
      ID: "",
      LastName: "",
      FirstName: "",
      City: "",
      State: "",
      Gender: "",
      StudentStatus: "",
      Major: "",
      Country: "",
      Age: "",
      SAT: "",
      Grade: "",
      Height: "",
    };
    task = "create";
  } else if (location.state.task === "update") {
    var currentID = location.state.data.ID;
    temp = location.state.data;
    task = "update";
  }

  const [data, setData] = useState(temp);
  const handleSubmit = (event) => {
    if (task === "create") {
      array.push(data);
      alert("Student Create Sucessfully");
    } else if (task === "update") {
      array.forEach((element, index, array) => {
        if (element.ID === currentID) {
          array.splice(index, 1);
          array.splice(index, 0, data);
        }
      });
      alert("Student update Sucessfully");
    }
  };
  const handleInputChange = (event) => {
    let val = event.target.value;
    const key = event.target.name;
    setData((prev) => {
      return { ...prev, [key]: val };
    });
  };

  return (
    <form className="m-4 px-3 py-4">
      <fieldset>
        <legend>Student Form</legend>
        <div className="row my-4">
          <div className="col-sm-1 ">ID</div>
          <div className="col-sm-2">
            <input
              type="text"
              defaultValue={data.ID}
              className="form-control"
              id="id"
              name="ID"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-1 offset-1 ">First Name</div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="FirstName"
              defaultValue={data.FirstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-1 offset-1 ">Last Name</div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="LastName"
              defaultValue={data.LastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-sm-1 ">City</div>
          <div className="col-sm-2">
            <input
              type="text"
              defaultValue={data.City}
              className="form-control"
              id="city"
              name="City"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-1 offset-1 ">State</div>
          <div className="col-sm-2">
            <input
              type="text"
              defaultValue={data.State}
              className="form-control"
              id="state"
              name="State"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-1 offset-1 ">Student Status</div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control"
              id="studentStatus"
              name="StudentStatus"
              defaultValue={data.StudentStatus}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-sm-1 ">Major</div>
          <div className="col-sm-2">
            <input
              type="text"
              defaultValue={data.Major}
              className="form-control"
              id="major"
              name="Major"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-1 offset-1 ltext">Country</div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control"
              id="country"
              name="Country"
              defaultValue={data.Country}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-1 offset-1 ">Age</div>
          <div className="col-sm-2">
            <input
              type="text"
              defaultValue={data.Age}
              className="form-control"
              id="age"
              name="Age"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-sm-1 ">SAT</div>
          <div className="col-sm-2">
            <input
              type="text"
              defaultValue={data.SAT}
              className="form-control"
              id="sat"
              name="SAT"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-1 offset-1 ltext">Grade</div>
          <div className="col-sm-2">
            <input
              type="text"
              defaultValue={data.Grade}
              className="form-control"
              id="grade"
              name="Grade"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-1 offset-1 ltext">Height</div>
          <div className="col-sm-2">
            <input
              type="text"
              defaultValue={data.Height}
              className="form-control"
              id="height"
              name="Height"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row my-4">
          <div className="col-sm-1 ">Gender</div>
          <div className="col-sm-1  ">Male</div>
          <div className="col-sm-1 form-check ">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              name="Gender"
              value="Male"
              checked={data.Gender === "Male"}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-1  ">Female</div>
          <div className="col-sm-1 form-check ">
            <input
              className=" form-check-input"
              type="radio"
              id="female"
              name="Gender"
              value="Female"
              checked={data.Gender === "Female"}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Link to="/">
          <button
            type="btn"
            onClick={handleSubmit}
            className="btn btn-primary my-3"
          >
            {task === "create" ? "Create" : "Update"}
          </button>
        </Link>
      </fieldset>
    </form>
  );
};

export default StudentForm;
