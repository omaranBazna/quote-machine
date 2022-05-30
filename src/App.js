import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
function App() {
const [quote,setQuote]=useState(0);


useEffect(() => {
  const interval = setInterval(() => {
    setQuote(old=>old+1)
  }, 4000);
  return () => clearInterval(interval);
}, []);
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
          {`"${quotes[quote%(quotes.length)][0]}"`}
        </div>
        <div className="btns">
        <button id="new-quote" onClick={()=>{setQuote(Math.floor(Math.random() * quotes.length));}}>
            new quote
        </button>
        <p id="author">
        {quotes[quote%(quotes.length)][1]}
        </p>
       
        <a id="tweet-quote">

        </a>
        </div>
      </div>
    </div>
  );
}

export default App;
