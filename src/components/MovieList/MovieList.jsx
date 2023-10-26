import MovieCard from 'components/MovieCard/MovieCard';

const MovieList = ({ movies }) => {
  const showMovies = Array.isArray(movies) && movies.length;

  return (
    <div>
      {showMovies &&
        movies.map(movie => {
          return (
            <div>
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
              />
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;

//? Var.3
// const CardList = ({ movies }) => {
//   return (
//     <List>
//       {movies.map(({ id, poster_path, name, title }) => (
//         <CardItem
//           key={id}
//           id={id}
//           poster_path={poster_path}
//           title={name ?? title}
//         />
//       ))}
//     </List>
//   );
// };

//? Var.5
// export const CardList = ({ movies }) => {
//   return (
//     <div>
//       {movies?.map(movie => {
//         return <MovieCard key={movie.id} movie={movie} />;
//       })}
//     </div>
//   );
// };

//? Var.2

// const showMovies = Array.isArray(movies) && movies.length;

// {
//   showMovies &&
//     movies.map(movie => {
//       return (
//         <MovieCard
//           key={movie.id}
//           id={movie.id}
//           poster_path={movie.poster_path}
//           title={movie.title}
//         />
//       );
//     });
// }
