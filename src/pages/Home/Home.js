import { FetchTrends } from "components/api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";

export const Home = () => {

    const [trends, setTrends] = useState([])
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
            <MoviesList collection={trends}/>
        </>
    )
}