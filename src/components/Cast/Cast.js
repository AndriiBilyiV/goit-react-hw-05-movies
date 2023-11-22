import { Actor } from "components/Actor/Actor"
import { CastCard, CastsList } from "./Cast.styled"

export const Cast = ({ casts }) => {
    
    return (
        <CastsList>
            {casts.map((actor) => {
                return (<CastCard key={actor.id}><Actor data={actor} /></CastCard>)
            })}
        </CastsList>
    )
}