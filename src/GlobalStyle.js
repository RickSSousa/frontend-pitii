import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    padding: 0;
  }

  h2 {
    color: ${(props) => props.theme.colors.primary};
  }

  button {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
    margin: 0.5em;
    border-radius: 5px;
  }

  button:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  input {
    padding: 0.5em;
    margin: 0.5em 0;
    border: 1px solid ${(props) => props.theme.colors.accent};
    border-radius: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 1em auto;
    padding: 1em;
    border: 1px solid ${(props) => props.theme.colors.accent};
    border-radius: 10px;
    background-color: white;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0.5em 0;
    padding: 0.5em;
    background-color: ${(props) => props.theme.colors.accent};
    border-radius: 5px;
  }

  nav {
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1em;
  }

  nav ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  nav li a:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default GlobalStyle;
