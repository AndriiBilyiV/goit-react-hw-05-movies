import { FetchSearch } from "components/api";
import { SearchList } from "components/SearchList/SearchList";
import { Form, Formik } from "formik"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { SearchWrapper, Input, Submit } from "./SearBar.style"

export const SearchBar = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        const  fetch = async () => {
            const result = await FetchSearch(params.get('query'));
            setSearchResult(result)
        } 
        fetch()
    }, [params])
    
    return (
        <SearchWrapper>
            <Formik
                initialValues={{ search: '' }}
                onSubmit={(values) => {
                    setParams({query:values.search})
                }}
            >
           <Form>
                <Input name="search"/>
                <Submit type="submit">Search</Submit>
                </Form>
            </Formik>
            {searchResult ?
                <SearchList collection={searchResult}/>
                : null}
        </SearchWrapper>
    )
}