import { FetchMovie } from "components/api";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import {
  AdditionalInfoWrapper,
  Button,
  MainWrapper,
  MovieWrapper,
} from "./Movie.styled";

export default function Movie() {
  const params = useParams();
  const [details, setDetails] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      const detailsData = await FetchMovie(params.id);
      setDetails(detailsData);
    };
    fetch();
  }, [params.id]);
  if (!details) {
    return;
  }
  const { poster_path, original_title, vote_average, overview, genres } =
    details;
  return (
    <MovieWrapper>
      <Link to={location.state.from ?? "/"}>
        <Button>Go back</Button>
      </Link>
      <MainWrapper>
        <img
          src={
            poster_path ? "https://image.tmdb.org/t/p/w300" + poster_path : null
          }
          alt={original_title + " poster"}
        />
        <div>
          <h1>{original_title}</h1>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>
            {genres
              ? genres.reduce((text, genre) => text + " " + genre.name, "")
              : null}
          </p>
        </div>
      </MainWrapper>
      <AdditionalInfoWrapper>
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to="cast" state={location}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="review" state={location}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </AdditionalInfoWrapper>
    </MovieWrapper>
  );
}
