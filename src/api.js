import axios from 'axios';

// URL base de la API
const BASE_URL = 'https://api.jikan.moe/v4/anime';

// Función para buscar anime
export const searchAnime = async (query) => {
  try {
    // Realizar la solicitud GET a la API
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        q: query,
        limit: 5, // Puedes ajustar la cantidad de restultados que aparecen
      },
    });

    // Devolver los resultados
    return response.data;
  } catch (error) {
    // En caso de error, lanzar una excepción
    throw error;
  }
};