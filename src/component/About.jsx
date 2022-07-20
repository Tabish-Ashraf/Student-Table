import { useLocation, useParams } from "react-router-dom";

function About(props) {
  const location = useLocation();
  console.log(location);

  // let { id, name } = useParams();
  const id = new URLSearchParams(location.search).get("id");
  return (
    <>
      <h1>About...</h1>
      <h1>{id}</h1>
      {/* <h2>{id}</h2>
      {name === "" ? "" : <h2>{name}</h2>} */}
    </>
  );
}
export default About;
