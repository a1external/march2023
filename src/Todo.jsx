import react from 'react';
import Flower from './Flower';
import './App.css';
import Flowerdata from './Flowerdata';
import Accord from './Accord';
import {useState} from 'react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
// import { isHtmlElement } from 'react-router-dom/dist/dom';


const App = () => {
  const [data, setdata] = useState("");
  const [item, setitem] = useState([]);

  const handle=(e)=>{
    setdata(e.target.value)
  }

  function hsubmit()
  {
  setitem(()=>{
  return[...item,data]
  })
 setdata("")
  }

  function remove(d){
    const call = item.filter((ar, I)=>{
      return (d!=I) ;
      
    })
setitem(call)
   
}


  

  return (
    <>
    <input type ="text" value = {data} onChange = {handle}></input>
    <h1 >{data}</h1>
    <p onClick={hsubmit}>+</p>
   <h1>oyster school of excellence</h1>
      <ol>
      {item.map((value,d)=>{
      return(
     <>
         <p key = {d}> </p>
        <li>{value}</li> 
         {/* <li>{key = {index}}</li>  */}
        <button onClick={()=>remove(d)}>remove(-)</button> <br></br>
       
     </>
       ) })}
      </ol>
    
      {/* {Flowerdata.map((value) => {
        return (
          <>

            <Flower
              imgsrc={value.imgsrc}
              tittle={value.tittle}
              desc={value.desc}
              btn={value.btn} />

          </>

        )
      })} */}

{/* <Accord/> */}

    </>
  )



};
export default App;