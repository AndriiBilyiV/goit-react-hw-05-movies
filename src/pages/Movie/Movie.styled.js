import { styled } from "styled-components";

export const MainWrapper = styled.div`
display: flex;
gap: 48px;
`
export const MovieWrapper = styled.div`
padding: 0 36px;
`
export const AdditionalInfoWrapper = styled.div`
`
export const Button = styled.button`
  background-color: #666;
  color: #ddd;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 24px; 
  transition: background-color 0.3s;
  user-select: none;
  &:hover {
    background-color: #888;
  }
`;
