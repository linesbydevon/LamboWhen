import { NavLink } from "react-router-dom";

export default function Nav(){
  return(
    <nav>
      <ul><NavLink to="/">Home</NavLink></ul>
      <ul><NavLink to="/about">About</NavLink></ul>
    </nav>
  )
}