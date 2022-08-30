import { NavLink } from "react-router-dom";
import '../../index.css'

const NavBar = () => {
    return (
      <div className=" p-3">
        <nav>
            <ul className=" flex justify-center">
                <li className=" py-1 px-2">
                  <NavLink to="/"> home </NavLink>
                </li>
                <li className=" py-1 px-2">
                  <NavLink to="gear" > gear </NavLink>
                </li>
                <li className=" py-1 px-2">
                  <NavLink to="games" > games </NavLink>
                </li>
                <li className=" py-1 px-2">
                  <NavLink to="links"> links </NavLink>
                </li>
                <li className=" py-1 px-2">
                  <NavLink to="trello" > trello </NavLink>
                </li>
            </ul>
        </nav>
      </div>
    )
}

export default NavBar