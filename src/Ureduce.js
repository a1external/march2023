import Products from "./Components/Products";

const Ureduce = (state, action) => {
  const { intialstate, totalprice, qty } = state;
  let product;
  let index
  let updatedprice = 0  
  let updatedqty;
  switch (action.type) {
    case "INC":
      const check = intialstate.find((product) => product.id === action.id);

      if (check) {
        return state;
      } else {
        product = action.value;
        product["qty"] = 1;
        updatedqty = qty + 1;
        updatedprice = totalprice + action.price;
        return {
          intialstate: [product, ...intialstate],
          totalprice: updatedprice,
          qty: updatedqty
        };
      }
        break;
    case "PLUS":
    product = action.val;
    product.qty = product.qty + 1
    updatedprice = totalprice + product.price;
    updatedqty =  qty + 1;
    console.log(updatedqty)
    index = intialstate.findIndex(cart=>cart.id === action.id)
    intialstate[index] = product
return{intialstate:[...intialstate], totalprice:updatedprice, qty: updatedqty }

    case "MIN":
      console.log("hrlo")
      product = action.val;
     if(product.qty>1){
 
    product.qty = product.qty - 1
    updatedprice = totalprice - product.price;
    updatedqty =  qty - 1;
   index = intialstate.findIndex(cart=>cart.id === action.id)
    intialstate[index] = product
return{intialstate:[...intialstate], totalprice:updatedprice, qty: updatedqty }
     }
     else{
return state
     }

     case "DEL":
const filtered = intialstate.filter(val=>val.id !== action.id)
       product = action.val
       updatedqty = qty-product.qty
       updatedprice = updatedprice -  product.price*product.qty
       return{intialstate:[...filtered], totalprice:updatedprice, qty: updatedqty }
       default:
          return state;
      
  }
};

export default Ureduce;
