import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { UsersContext } from "../../contexts/UsersContext";
import { Button, Container } from "./styles";

const Products = () => {
  const { products, addProduct, updateProduct, deleteProduct } =
    useContext(ProductsContext);
  const { isAuthenticated } = useContext(UsersContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price, image };
    if (editing) {
      updateProduct(currentProduct.id, {
        ...product,
        imageUrl: currentProduct.imageUrl,
      });
      setEditing(false);
      setCurrentProduct(null);
    } else {
      addProduct(product);
    }
    setName("");
    setPrice("");
    setImage(null);
  };

  const handleEdit = (product) => {
    setEditing(true);
    setCurrentProduct(product);
    setName(product.name);
    setPrice(product.price);
    setImage(product.imageUrl);
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  return (
    <Container>
      {isAuthenticated && (
        <>
          <h2>Gerenciar Produtos</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nome:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Preço:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label>Imagem:</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <Button type="submit">
              {editing ? "Atualizar Produto" : "Adicionar Produto"}
            </Button>
          </form>
        </>
      )}
      <h2>Cardápio</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={`${product.image_url}`} alt={product.name} />
            <div className="product-info">
              <strong>{product.name}</strong>
              <span>R${product.price}</span>
            </div>
            {isAuthenticated && (
              <div className="options">
                <Button onClick={() => handleEdit(product)}>Editar</Button>
                <Button onClick={() => handleDelete(product.id)}>
                  Deletar
                </Button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Products;
