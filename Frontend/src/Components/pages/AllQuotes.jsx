import React, { useEffect, useState } from 'react'
import axios from "axios";
import Quotes from "../quotes/Quotes";
function AllQuotes() {

  let [quotes, setQuotes] = useState([]);

  useEffect(function(){
   async function getQuotes(){
     const res =  await axios.get('http://localhost:8080/allquotes');
     setQuotes(res.data);
    }
    getQuotes();
  },[]);

  return (
    <div>
      <h1>AllQuotes</h1>
      <ul>
        {quotes.map((quote, index)=>{
          return (<Quotes id={quote._id} key = {quote._id} img={quote.img} author={quote.author} age={quote.age} text={quote.text}/>)
        })}
      </ul>
    </div>
  )
}

export default AllQuotes