import { NavLink } from "react-router-dom";

export default function Nav(){
  return(
    <nav>
      <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}