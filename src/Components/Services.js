import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Contact from "./Contact";
const Services = () => {
  const [bus, setbus] = useState({});
  const productID = useParams();
  console.log(productID);
  const { title, id, image,price, description,category } = bus;
  useEffect(() => {
    async function show() {
      const id = productID.id;
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setbus(response.data);
    }

    show();
    return()=>{
      setbus("")
    }
  }, [productID]);

  return (
    <>
      <h1>Service page<br/>{title} {id} </h1>
      <img src={image} alt="" width="120px"></img>
      <h6>${price}</h6>
    <h6>{description}</h6>
    <h6>{category}</h6>
    <Contact/>
    </>
  );
};
export default Services;