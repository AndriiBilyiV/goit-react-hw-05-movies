import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ collection }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {collection.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
