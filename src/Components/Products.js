
import { useContext } from "react"
import {Providedata} from "../Data" 
import {ContextC} from "../Createcon"
 const Products=()=>{
const {product} = useContext(Providedata)
const {dispatch} = useContext(ContextC)


const renderlist = product.map((value)=>{

    const{id,title,price,description,category,image} = value
    return(
      
      < ul key={id} style={{color:"red",width:"20%", border:"2px solid blue",}}>  
      <li>{id}</li>
      <li>{title}</li>
      <li>{price}</li>
      <li>{description}</li>
      <li>{category}</li>
      <button onClick={()=>{dispatch({type:"INC", id:value.id, price: value.price, value})}}>Add to cart</button> 
      <img src = {image} alt = ""  width= "120px"></img><br/>
     </ul>
    
    )
  })
  
return(
<>

<div style ={{position:"absolute",top:"50px",left:"0",zIndex:2, width:"135%"}}>

   <h6> {renderlist}</h6> 
 
      </div>
    </>)

 }
 export default Products