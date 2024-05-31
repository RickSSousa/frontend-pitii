import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1em;
`;

export const Title = styled.h1`
  color: white;
  font-size: 1.5em;
  margin: 0;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  margin-left: 1em;
  background-color: transparent;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;
