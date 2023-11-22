import { FetchTrends } from "components/api";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"

export const Trending = () => {

    const [trends, setTrends] = useState([])
    const location = useLocation();
    useEffect(() => {
        const  fetch = async () => {
            const result = await FetchTrends();
            setTrends(result)
            } 
        fetch()
    }, [])

  


    
    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {trends.map(movie => {
                    return (<li key={movie.id}><Link to={`/movies/${movie.id}`} state = {{from: location}}>{movie.title}</Link></li>)
                })}
            </ul>
        </>
    )
}