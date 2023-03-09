import {React} from "react";
import { createContext} from "react";
import {useState, useEffect} from "react"
import axios from "axios"

export const Providedata = createContext()

// const Dummymeals = [
//     {
//         id: 1,
//         question: "what is react",
//         image: "react is javascript library",
//     },
//     {
//         id: 2,
//         question: "what is javascript",
//         answer: "javascript is web programing language",
//     },
//     {
//         id: 3,
//         question: "what is css",
//         answer: "cascading style sheet",
//     },
//     {
//         id: 4,
//         question: "what is html",
//         answer: "hyper text markup language",
//     },
// ]

//context api formation

const Data=(props)=>{
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
// adding pagination


//

console.log(temp)
  
return(
    <Providedata.Provider value={{product: [...temp], }}>
        {props.children}
    </Providedata.Provider>
    
    )
}
export default Data
// 

//     return(
//         <p>
//         { Dummymeals.map((val,ind)=>{
//     return(
//     <ul>
//     <li>{val.id}</li>
//     <li>{val.question}</li>
//     <li>{val.answer}</li>
//     </ul>)})}
// </p>
// )
//     }

// export default Data;
