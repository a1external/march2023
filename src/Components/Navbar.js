import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <NavLink to="/">
          <li>About</li>
        </NavLink>
        <NavLink to="/Services">
          <li>Services</li>
        </NavLink>
        <NavLink to="/Contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Navbar;