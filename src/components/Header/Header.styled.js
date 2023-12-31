import { styled } from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #444;
  padding: 36px;
  color: #ddd;
  margin-bottom: 24px;
`;

export const NavButton = styled.button`
  background-color: #666;
  color: #ddd;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 12px; 
  transition: background-color 0.3s;
  user-select: none;

  &:hover {
    background-color: #888;
  }
`;
