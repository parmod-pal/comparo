import "../style.css";
import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function Quote(){
  const [quotes,setQuotes] = useState([]);
  const [quote,setQuote] = useState(null);
  useEffect(() =>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((json)=>{
      setQuotes(json);
      setQuote(json[0]);
      console.log(json);
    })
  },[]);

  function getNewQuote(){
    setQuote(getRandomQuote(quotes));
  }

  return(
    <main>
      <h1>Project 3 : Quote Generator</h1>
      <section className ="quote">
      <button onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>“</span>
          {quote?.text}
        </h3>
        <i>- {quote?.author}</i>
      </section>
    </main>
  )
}