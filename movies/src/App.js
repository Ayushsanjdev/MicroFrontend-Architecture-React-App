import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movieImg, setmovieImg] = useState(null);

  const fetchMovies = () => {
    setmovieImg('');
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(info => setmovieImg(info.message))
  }

  useEffect(() => {
    if (movieImg === null) {
      fetchMovies();
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        Search more dogs
      </header>
      {movieImg !== '' ? (
        <img src={movieImg} width="400px" alt="doggo"/>
      ) : <p>loading img...</p>}
      <button onClick={() => fetchMovies()}>Search</button>
    </div>
  );
}

export default App;
