import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContextC } from "../Createcon";

const Navind = () => {
  const {qty} = useContext(ContextC);
 
  return (
    <div  style={{
        position:"fixed", zIndex:"3",top:"0",left:"0",width: "100%",backgroundColor:"green"}}>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between",
        alignItems:"center"}}>
        <NavLink to="/">
          <li>Online Shopping</li>
        </NavLink>
       
        <NavLink to="/Cart">
          <li><button>Cart----{qty}---</button></li>
        </NavLink> 
      </ul>
    </div>
  );
};
export default Navind;

