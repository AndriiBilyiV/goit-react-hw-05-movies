import { FetchCast, FetchMovie, FetchReviews } from "components/api";
import { Cast } from "components/Cast/Cast";
import { Review } from "components/Review/Review";
import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes, useLocation, useParams } from "react-router-dom"
import { AdditionalInfoWrapper, Button, MainWrapper, MovieWrapper } from "./Movie.styled";

export const Movie = () => {
    
    const params = useParams();
    const [details, setDetails] = useState([]);
    const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
    const  fetch = async () => {
        const detailsData = await FetchMovie(params.id);
        setDetails(detailsData);
        const castData = await FetchCast(params.id);
        setCast(castData);
        const reviewsData = await FetchReviews(params.id);
        setReviews(reviewsData);
    } 
  fetch()
    }, [params.id])
    const { poster_path, original_title, vote_average, overview, genres } = details;
    return (
        <MovieWrapper>
            <Link to={location.state.from ?? "/"}>
                <Button>Go back</Button>
            </Link>           
            <MainWrapper>
                <img src={poster_path ? 'https://image.tmdb.org/t/p/w300' + poster_path : null} alt={original_title+' poster'} />
                <div>
                <h1>{original_title}</h1>
                <p>User Score: {Math.round(vote_average*10)}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <p>{genres ? genres.reduce((text, genre) => text + ' ' + genre.name,'') : null}</p>
                </div>
            </MainWrapper>
            <AdditionalInfoWrapper>
                <p>Aditional information</p>
                <ul>
                    <li><Link to='cast' state={location}>Cast</Link></li>
                    <li><Link to='review' state={location}>Reviews</Link></li>
                </ul>
                <Routes>
                    <Route path="cast" element={<Cast casts={cast} />} />
                    <Route path="review" element={<Review data={reviews} />} />
                </Routes>
                <Outlet />
            </AdditionalInfoWrapper>
        </MovieWrapper>
    )
}