import styled from "styled-components";
import heroImage from "../../assets/hero-image.jpg";

export const Container = styled.div`
  text-align: center;
  padding: 2em;
`;

export const HeroSection = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  height: 400px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const HeroText = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

export const ProductsSection = styled.section`
  padding: 2em 0;
`;

export const ProductList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
`;

export const Product = styled.div`
  max-width: 300px;
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const ProductName = styled.h3`
  margin: 0.5em 0;
`;
