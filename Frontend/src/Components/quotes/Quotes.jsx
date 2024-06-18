import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

function Quotes(props) {
    let navigate = useNavigate()
    function showQuotesHandler(id){
        navigate(`/quotes/${id}`);
    }
    
  return (
    <Fragment>
            <div className="card">
                <div className="image-container">
                    <img src={props.img} alt="" />
                </div>
                <div className="info-container">
                    <span className="author">{props.author}</span>
                    <span className="age">Age: {props.age}</span>
                    <p className="text">{props.text}</p>
                    <button onClick={() => { showQuotesHandler(props.id) }}>View</button>
                </div>
            </div>
        </Fragment>
  )
}

export default Quotes