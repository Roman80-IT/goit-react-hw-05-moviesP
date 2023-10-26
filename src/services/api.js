import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '687e4525be1a45f56930e098a4988fd3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  // console.log('data: ', data);
  return data.results;
};

// `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`;
// `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=687e4525be1a45f56930e098a4988fd3`
