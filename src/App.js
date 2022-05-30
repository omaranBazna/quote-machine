import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
function App() {
const [quote,setQuote]=useState(0);
useEffect(()=>{
setInterval(()=>{
setQuote(old=>old+1)
},5000);
},[])
var quotes = [
  ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
  ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
  ["Argue with idiots, and you become an idiot.", "Paul Graham"],
  ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
  ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
]
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">
          {quotes[quote%(quotes.length)][0]}
        </div>
        <div id="author">

        </div>
        <button id="new-quote" onClick={()=>{setQuote(Math.floor(Math.random() * quotes.length));}}>

        </button>
        <a id="tweet-quote">

        </a>
        <p id="text">

        </p>
        <h1 id="author">
        {quotes[quote%(quotes.length)][1]}
        </h1>
      </div>
    </div>
  );
}

export default App;
