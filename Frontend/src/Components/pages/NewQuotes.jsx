import axios from 'axios';
import React, { useRef } from 'react'
import {useNavigate} from "react-router-dom";
function NewQuotes() {
  let navigate = useNavigate();
  let usernameInputRef = useRef();
  let userimageInputRef = useRef();
  let userageInputRef = useRef();
  let quoteInputRef = useRef();

  async function addQuoteHandle(e){
    e.preventDefault();
    let author = usernameInputRef.current.value;
    let img = userimageInputRef.current.value;
    let age = userageInputRef.current.value;
    let text = quoteInputRef.current.value;
    try{
      let res =await axios.post('http://localhost:8080/addquotes', {
        author,
        img,
        age,
        text
      });
      navigate('/');
    }
    catch(e){
      console.log('cannot create a quote');
    }
  }

  return (
    <div>
      <form onSubmit={addQuoteHandle}>
        <div>
          <label htmlFor="naam">Author:</label>
          <input type="text" placeholder="Author's Name" id="naam" ref={usernameInputRef} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="text"  placeholder="Author's Image" id="image" ref={userimageInputRef}/>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" placeholder="Author's Age" id="" ref={userageInputRef} />
        </div>
        <div>
          <label htmlFor="textt">Quotes:</label>
          <textarea placeholder="Author's Quote" id="textt" cols="30" rows="4" ref={quoteInputRef}></textarea>
        </div>
        <button type='submit'>Add Quote</button>
      </form>
    </div>
  )
}

export default NewQuotes