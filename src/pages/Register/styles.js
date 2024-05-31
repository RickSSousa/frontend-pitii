import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 2em auto;
  padding: 2em;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  margin: 0.5em;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
