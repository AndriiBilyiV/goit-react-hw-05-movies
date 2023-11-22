import { Field } from "formik";
import { styled } from "styled-components";

export const SearchWrapper = styled.div`
padding: 0 36px;
`

export const Input = styled(Field)`
font-size: 16px;
padding: 10px 20px;
border-radius: 6px;
margin-right: 12px;
`
export const Submit = styled.button`
  background-color: #666;
  color: #ddd;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 24px; 
  transition: background-color 0.3s;
  user-select: none;
  &:hover {
    background-color: #888;
  }
`;