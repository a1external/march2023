import React from 'react'

import { useState } from 'react';

const Acordion = ({question,answer}) => {
    const [text, settext] = useState(false)
    const handlechange=()=>{
        settext(!text)
        //{text?<i class="fa-solid fa-sort-up"></i>:<i class="fa-solid fa-sort-down"></i>}
    }
  return (
    <div>
       <div className='question'>
                                <h1>{question}</h1>
                                <p onClick={handlechange}>+</p>
                            </div>

                            <div className='answer'>
                              {text && <p>{answer}</p> }
                                
                            </div>
    </div>
  )
}

export default Acordion
