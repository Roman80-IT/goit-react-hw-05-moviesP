import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';

import MovieList from 'components/MovieList/MovieList';
import ErrorMessage from 'components/ErrorMessage';

import { getTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setTrendingList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendsMovies = async () => {
      try {
        setLoading(true);
        const moviesList = await getTrendingMovies();

        setTrendingList(moviesList);
      } catch (error) {
        console.log(error.massage);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendsMovies();
  }, []);

  console.log('Movies:', movies);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <h1>Trend of day</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;

// import React from 'react';

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;
