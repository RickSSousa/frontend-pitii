import styled from "styled-components";

export const Container = styled.div`
  margin: 2em auto;
  padding: 1em;
  width: 80%;
  max-width: 1000px;

  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    list-style: none;
    padding: 0;
    justify-content: center;

    .product-item {
      flex: 1 1 calc(25% - 1em);
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1em 0;
      padding: 1em;
      background-color: #f8f8f8;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      img {
        border-radius: 10%;
        width: 100%;
        height: 150px;
        object-fit: cover;
      }

      .product-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 0.5em;

        strong {
          margin-bottom: 0.5em;
        }
      }

      .options {
        display: flex;
        gap: 1em;
        margin-top: 0.5em;
      }
    }
  }
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
