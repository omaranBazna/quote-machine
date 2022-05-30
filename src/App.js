import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
function App() {
const [quote,setQuote]=useState(0);
useEffect(()=>{
setInterval(()=>{
setQuote((old)=>{old+1})
},1000);
},[quote])
  const quotes=[
   "you are stupid",
   "you are not worthy",
   "you can not do it"
  ]
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">
          {quotes[quote%(quotes.length)]}
        </div>
        <div id="author">

        </div>
        <button id="new-quote">

        </button>
        <a id="tweet-quote">

        </a>
        <p id="text">

        </p>
        <h1 id="author">

        </h1>
      </div>
    </div>
  );
}

export default App;
