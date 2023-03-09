import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
const About = () => {
const [temp, settemp] = useState([])
const Apilink ="https://fakestoreapi.com/products"
useEffect(()=>{
  async function show()
  {
    const response =await axios.get(Apilink)
    settemp(response.data)
  }
  show()
},[])
const renderlist = temp.map((product)=>{

  const{id,title,price,description,category,image} = product
  return(
    <p>
      <h1> i am about</h1>
    <Link to = {`/product/${id}`}>
      
    <h6>{id}</h6>
    <h6>{title}</h6>
    <h6>{price}</h6>
    <h6>{description}</h6>
    <h6>{category}</h6>
    <img src = {image} alt = ""  width= "120px"></img>
    </Link>
  </p>
  )
})

  return (
    <>
      {renderlist}
    </>
  );
};
export default About;