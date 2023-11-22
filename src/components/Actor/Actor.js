import { Name, Wrapper } from "./Actor.styled";

export const Actor = ({ data }) => {
    const { name, profile_path } = data;
    return (
        <Wrapper>
            <img src={profile_path ? 'https://image.tmdb.org/t/p/w154' + profile_path : null} alt={name} />
            <Name>{name}</Name>
        </Wrapper>
    )
}