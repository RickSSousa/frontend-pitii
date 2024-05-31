import React from "react";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import {
  Container,
  HeroSection,
  HeroText,
  Product,
  ProductImage,
  ProductList,
  ProductName,
  ProductsSection,
} from "./styles";

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <HeroText>Bem vindo a Cafeteria Gourmet</HeroText>
      </HeroSection>
      <ProductsSection>
        <h2>Nossos Produtos</h2>
        <ProductList>
          <Product>
            <ProductImage src={product1} alt="Product 1" />
            <ProductName>Deliciosos Bolos</ProductName>
          </Product>
          <Product>
            <ProductImage src={product2} alt="Product 2" />
            <ProductName>Doces Cupcakes</ProductName>
          </Product>
          <Product>
            <ProductImage src={product3} alt="Product 3" />
            <ProductName>Deliciosos Cookies</ProductName>
          </Product>
        </ProductList>
      </ProductsSection>
    </Container>
  );
};

export default Home;
