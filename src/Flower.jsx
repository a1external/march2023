import react from 'react';

const flower = (props) => {

    return (
        <>
            <div className='container'>
                <div className="card">
                    <h2>{props.tittle}</h2>
                    <img src={props.imgsrc} alt = "hello"/>
                    <p>{props.desc}</p>
                    <button id = "text">{props.btn}</button>
                    <hr/>
                  </div>
                  
            </div>

        </>
        )
    };
export default flower;