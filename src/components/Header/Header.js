import React from "react";
import NavBar from "../Navbar/NavBar";

export default function Header() {
  return (
    <div class="jumbotron jumbotron-fluid">
      <NavBar />
      <div class="container">
        <h1 class="display-5">Say Hello To Your Next Employee</h1>
        <p class="lead">
          As a Full Stack Developer my goal is to work for a company whose goals
          is to change the world. Working on real world projects that can help
          people is my nunber one goal
        </p>
      </div>
    </div>
  );
}
