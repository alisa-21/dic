import { useEffect, useState } from 'react';
import './App.css';
//import dictionary from './dictionary.js';

function App() {
  //const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi=() =>{
    try{
      const data = `https://api.dictionaryapi.dev/api/v2/entries/en/word`;
      
      setMeanings(data.data);
    }catch(error){
      console.log(error);
    }
  };

  console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  }, [])

  return <div className="App">
    
    <div class="wrapper">
      <header><h1>English dictionary</h1></header>
      <div class="search">
        <input type="text" placeholder="Type word and press enter to get meaning" required spellcheck="false" id="ter" class="input"/>
      </div>
      
      <ul>   
        <li class="meaning">
          <p>Meaning</p>
          <input type="text" id="def" class="input"/>
        </li>
        <div class="btn-wrapper">
          <button id="add-word-btn">Add to favorites</button>
        </div>
      </ul>
      
      <h2>Favorites: </h2>
      <div class="table-block">
          <table id="table">
          </table>
      </div>
    </div>
  </div>;
}

export default App;


