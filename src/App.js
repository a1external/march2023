import Products from "./Components/Products";
import Createcon from "./Createcon";
import Data from "./Data";
import { Routes, Route } from "react-router-dom";
import Navind from "./Components/Navind";
import Baner from "./Components/Baner";
import Cart from "./Cart";


export default function App() {

  return (

    <div className="App">
      
    

      <div style={{position:"relative",
    zIndex:2}}>
        {/* pagination */}
        
        {/* pagination */}
        <Createcon>
        <Data>
         <Navind />
         <Baner/>
          <Routes> 
          <Route  exact path = '/' element = {<Products/>}> </Route>   
          <Route  exact path = '/Cart' element = {<Cart/>}> </Route>      
        </Routes>  
        
         </Data>
        </Createcon>
      </div>



    </div>

  );
}