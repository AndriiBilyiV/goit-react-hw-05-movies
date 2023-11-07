import { NavLink } from "react-router-dom";
import { NavButton, StyledHeader } from "./Header.styled";

export const Header = () => {
    return (
        <StyledHeader>
            <NavLink to='/'>
                <NavButton>Home</NavButton>
            </NavLink>
            <NavLink to='/movies'>
                <NavButton>Movies</NavButton>
            </NavLink>
        </StyledHeader>
    )
}