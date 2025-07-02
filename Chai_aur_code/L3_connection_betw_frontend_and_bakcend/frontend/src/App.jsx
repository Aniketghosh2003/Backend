import { useState,useEffect } from 'react';
import './App.css'
import axios from "axios"

function App() {
  const [jokes , setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
    .then(response =>setJokes(response.data))
    .catch(error => console.error(error));
  })

  return (
    <>
      <h1>Connection Of Frontend and Backend</h1>

      <ul>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.joke}</h3>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App
