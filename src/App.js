import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
function App() {
const [quote,setQuote]=useState(0);
const [bg_color,setBgColor]=useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setQuote(old=>old+1)
    setBgColor(old=>old+1)
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
const colors=[
  'color1',
  'color2',
   'color3',
 'color4',
  'colo5'
]
  return (
    <div className={["App",colors[bg_color%(colors.length)]].join(' ')}>
      <div id="quote-box" className={colors[(bg_color+2)%(colors.length)]}>
        <div id="text">
          {`"${quotes[quote%(quotes.length)][0]}"`}
       
        </div>
        <p id="author">
        {quotes[quote%(quotes.length)][1]}
        </p>
        <button id="new-quote" onClick={()=>{setQuote(Math.floor(Math.random() * quotes.length));setBgColor(Math.floor(Math.random() *colors.length))}}>
            new quote
        </button>
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quotes[quote%(quotes.length)][0].replace(' ',"%20")}"%20${quotes[quote%(quotes.length)][1].replace(' ',"%20")}`}>
          Tweet the quote!!!
        </a>
        
      </div>
    </div>
  );
}

export default App;
