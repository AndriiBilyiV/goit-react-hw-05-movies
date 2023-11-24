import { Actor } from "components/Actor/Actor"
import { FetchCast } from "components/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CastCard, CastsList } from "./Cast.styled"

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const params = useParams();
    useEffect(() => {
        const  fetch = async () => {
            const castData = await FetchCast(params.id);
            setCast(castData);
            } 
        fetch()
    }, [params.id])

    return (
        <CastsList>
            {cast.map((actor) => {
                return (<CastCard key={actor.id}><Actor data={actor} /></CastCard>)
            })}
        </CastsList>
    )
}