import { Form, Formik } from "formik"
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { FetchSearch } from "components/api";
import { Input, Submit } from "./SearchForm.styled";

export const SearchForm = ({setData}) => {
        const [params, setParams] = useSearchParams();

    useEffect(() => {
        const  fetch = async () => {
            const result = await FetchSearch(params.get('query'));
            setData(result)
        } 
        fetch()
    }, [params])
    
    return (
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
    )
}