import React from "react";
import { Link, Outlet } from "react-router";

function About() {
  return (
    <>
      <h3>Header </h3>

      <Link to={"/about/user"}>
        <button className="btn btn-sm btn-info m-3 "> User Data </button>
      </Link>
      <Link to={"/about/profile"}>
        <button className="btn btn-sm btn-danger m-3">Profile </button>
      </Link>

      <main>
        <Outlet />
      </main>
      <h3>Footer</h3>
    </>
  );
}

export default About;
