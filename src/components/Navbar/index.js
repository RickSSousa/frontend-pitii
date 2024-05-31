import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { UsersContext } from "../../contexts/UsersContext";
import { Li, LogoContainer, LogoImage, Nav, Title, Ul } from "./styles";

function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(UsersContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/products");
  };

  return (
    <Nav>
      <LogoContainer>
        <LogoImage src={logo} alt="Cafeteria Gourmet Logo" />
        <Title>Cafeteria Gourmet</Title>
      </LogoContainer>
      <Ul>
        <Li>
          <Link to="/products">Produtos</Link>
        </Li>
        {isAuthenticated ? (
          <Ul>
            <Li>
              <Link to="/home">Home</Link>
            </Li>
            <Li>
              <Link to="/users">Usuários</Link>
            </Li>
            <Li>
              <Link onClick={handleLogout}>Logout</Link>
            </Li>
          </Ul>
        ) : (
          <Ul>
            {/* <Li>
              <Link to="/register">Register</Link>
            </Li> */}
            <Li>
              <Link to="/login">Login</Link>
            </Li>
          </Ul>
        )}
      </Ul>
    </Nav>
  );
}

export default Navbar;
