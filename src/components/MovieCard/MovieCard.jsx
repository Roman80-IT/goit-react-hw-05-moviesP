import { Link } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieCard = ({ id, poster_path, title }) => {
  return (
    <div>
      <Link to={`/movies/${id}`}>
        {
          <img
            src={poster_path ? `${BASE_URL}${poster_path}` : DEFAULT_IMG}
            alt={title}
          />
        }
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;

//? Var.3
// const MovieCard = ({ photo, name, character }) => {
//   return (
//     <li>
//       {<img src={photo ? `${BASE_URL}${photo}` : DEFAULT_IMG} alt={name} />}
//       <h2>{name}</h2>
//       <p>Character: {character}</p>
//     </li>
//   );
// };

// export default MovieCard;

//? Var.4
// import { Link, useLocation } from 'react-router-dom';
// import ListItem from './CardItem.styled';
// // import defaultIMG from '../../images/no-image.png'

// const MovieCard  = ({ id, poster_path, title }) => {
//   const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';
//   const location = useLocation();
//   return (
//     <ListItem>
//       <Link to={`/movies/${id}`} state={{ from: location }}>
//         <img
//           className="filmImg"
//           src={`${BASE_IMG_URL}${poster_path}`}
//           alt={title}
//         />
//         <h2 className="title">{title}</h2>
//       </Link>
//     </ListItem>
//   );
// };

//? Var.2
// const PostListItem = ({ id, title, userId, body }) => {
//   return (
//     <li className="postListItem">
//       <Link to={`/post-details/${id}`}>
//         <span>Id: {id}</span>
//         <h3>Title: {title}</h3>
//         <h4>User Id: {userId}</h4>
//         <p>Body: {body}</p>
//       </Link>
//     </li>
//   );
// };
