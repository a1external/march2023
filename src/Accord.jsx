import React from 'react'
import './App.css';
import { useState } from 'react';
import Data from './Data';
import Acordion from './Acordion';

const Accord = () => {
    const [data, setdata] = useState(Data)
    return (
        <>
       
            <div className='container'>
                <div className='acordblock'>
                    {data.map((value) => {
                        return (<>

                           <Acordion  question={value.question}
                                      answer={value.answer}/>

                        </>

                        )

                    })}


                </div>

            </div>
        </>
    )
}

export default Accord;
