import { Link } from "react-router";

function App() {
  return (
    <>
      <h1>Home Page</h1>

      <Link to={"/todos"} className="m-3 ">
        {" "}
        Todos{" "}
      </Link>

      <Link to={"/about"} className="m-3 ">
        {" "}
        about{" "}
      </Link>
      <Link to={"/auth"} className="m-3 ">
        {" "}
        Auth{" "}
      </Link>

      <Link to={"/contact"} className="m-3 ">
        {" "}
        contact{" "}
      </Link>
    </>
  );
}

export default App;
