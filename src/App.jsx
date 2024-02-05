import React, { useState } from 'react';
import { searchAnime } from './api';
import { getRecommendationMessage } from './puntuacion'; // Importa la función de puntuación
import './App.css';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [animeList, setAnimeList] = useState([]);

  const handleSearch = async () => {
    if (!searchInput) {
      alert('Por favor, ingrese un nombre de anime.');
      return;
    }

    try {
      const results = await searchAnime(searchInput);

      // Imprimir en consola los resultados de la API
      console.log('Resultados de la API:', results);

      // Verificar si la respuesta contiene la data y es un array
      if (results.data && Array.isArray(results.data)) {
        setAnimeList(results.data);
      } else {
        setAnimeList([]);
      }
    } catch (error) {
      console.error('Error al buscar anime:', error);
      }
  };

  console.log('Estado de animeList antes del mapeo:', animeList);

  return (
    <div className="container">
      <h1>Busca tu Anime Favorito</h1>
      <h2>y te daremos nuestra opinion</h2>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Buscar anime por nombre"
      />
      <button onClick={handleSearch}>Buscar</button>
      <div className="slider">
        {animeList.length > 0 ? (
          animeList.map((anime) => (
            <div key={anime.title}>
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <p>{anime.title}</p>
              <p>Puntuación: {anime.score}</p>
              <p>Recomendación: {getRecommendationMessage(anime.score)}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}

export default App;