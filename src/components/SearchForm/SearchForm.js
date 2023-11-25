import { Form, Formik } from 'formik';
import { Input, Submit } from './SearchForm.styled';

export const SearchForm = ({ setData }) => {
  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={values => {
        setData({ query: values.search });
      }}
    >
      <Form>
        <Input name="search" />
        <Submit type="submit">Search</Submit>
      </Form>
    </Formik>
  );
};
