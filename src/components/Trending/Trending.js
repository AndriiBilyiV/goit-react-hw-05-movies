import { Link } from "react-router-dom"

export const Trending = ({ data }) => {
    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {data.map(movie => {
                    console.log(movie.id)
                    return (<li><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>)
                })}
            </ul>
        </>
    )
}