import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ShowQuotes() {
  const params =   useParams();
  let [quote, setQuote] = useState(
    {
        author:"",
        img:"",
        age:0,
        text:""
    }
  )
    useEffect(()=>{
      async  function fetchQuote(){
         let res= await  axios.get(`http://localhost:8080/quotes/${params.id}`)
         let {img, author, age, text} = res.data;
            setQuote({author, img, age, text})
        }
        fetchQuote()
    },[])
  return (
    <div>
        <div>
            <div>
                <span><img src={quote.img} alt="" />
                    <span>Author:{quote.author}</span>
                </span>
                <p>age:{quote.age}</p>
            </div>
            <div>
                <p>text:{quote.text}</p>
            </div>
            
        </div>
    </div>
  )
}

export default ShowQuotes