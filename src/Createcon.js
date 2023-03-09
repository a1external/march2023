import { createContext, useReducer, useState} from "react";
import Ureduce from "./Ureduce";

export const ContextC = createContext()


const Createcon=(props)=>{

    const[cartstate, dispatch] = useReducer(Ureduce,{intialstate:[], totalprice:0,qty:0});
    const[clk, setclk] = useState("heloo")

return(

<ContextC.Provider value={{clk, ...cartstate, dispatch}}>
  {props.children}
</ContextC.Provider>

)
  

}
export default Createcon    