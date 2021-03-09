
import './App.css';
import React, { useState ,useEffect } from 'react';

const API_URl="https://api.icndb.com/jokes/random";

function App() {

  const [joke, setJoke] = useState('');

  useEffect(() => {
    GenerateJoke();

  }, [])

  const GenerateJoke = () => {
    fetch(API_URl)
    .then(res =>res.json())
    .then(data=>setJoke(data.value.joke)); //this is for the fetching the  joke From the APi
  }
  console.log({joke})
  return (

     
    <div className="Box">
        <div>
          <h2>Joke Generator</h2>
          <p dangerouslySetInnerHTML={{__html:joke}}/>

          <button onClick={GenerateJoke}>Get New Joke</button>
              
        </div>
        <div className="Header">
        
        <a href="https://twitter.com/">Twitter</a>
      
      </div>
    </div>
    
    
  );
 
}

export default App;
