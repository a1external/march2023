import { useContext } from "react";
import { ContextC } from "./Createcon";

const Cart = () => {
  const { intialstate, dispatch,totalprice, qty} = useContext(ContextC);

const p = intialstate.map((val, ind) => {
   
 const{id,title,price,description,category,image,qty} = val
 return (< ul key={id} style={{listStyle: "none",color:"red", border:"2px solid blue", }}>  
<li>item-id{id}</li>
<li>item-title{title}</li>
 <li>item-description{description}</li>
 <li>item-category{category}</li>
<img src = {image} alt = ""  width= "120px"></img><br/>
 <div style={{display: "flex", width:"50%", height:"20px",justifyContent: "space-between"}}>
<li>item-price{price}</li>
<button onClick={()=>dispatch({type:"PLUS", id: val.id, val})}>+</button>
 <li>item-qty{qty}</li>
 <button onClick={()=>dispatch({type:"MIN", id: val.id, val})}>-</button>
 <li>price{price*qty}</li>
<button onClick={()=>dispatch({type:"DEL", id: val.id, val})}>@Trash</button>
  
 </div>
</ul>);
 });
  return (
    <>
    <div style={{position:"fixed", display:"flex", width:"100%",justifyContent:"center"}}>
      <h1 style={{ position: "relative", top:"5px",width:"30%",height: "20%", backgroundColor: "red" ,zindex:3}}>
      Best Discount Site</h1>
      </div>
     <div style={{ height: "100%", backgroundColor: "pink",}}>
                    {p.length>0? <h6 style={{position:"relative",zIndex:2}}>{p}</h6>: <p>shopping cart is empty</p>}
      </div> 
     <h3>totalqty - {qty}  totalprice-{totalprice}</h3> 
    </>
  );
};
export default Cart;
