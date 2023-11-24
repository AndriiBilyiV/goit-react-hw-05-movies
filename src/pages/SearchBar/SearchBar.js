import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useState } from "react";
import { SearchWrapper} from "./SearBar.style"

export const SearchBar = () => {
    const [searchResult, setSearchResult] = useState([]);
    return (
        <SearchWrapper>
            <SearchForm setData={setSearchResult} />
            {searchResult.length>0 &&
                <MoviesList collection={searchResult}/>}
        </SearchWrapper>
    )
}