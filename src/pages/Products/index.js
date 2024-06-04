import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { ProductsContext } from "../../contexts/ProductsContext";
import { UsersContext } from "../../contexts/UsersContext";
import { Button, Container } from "./styles";

const customStyles = {
  content: {
    width: "50%",
    maxWidth: "600px",
    height: "60%",
    maxHeight: "400px",
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

const Products = () => {
  const { products, addProduct, updateProduct, deleteProduct } =
    useContext(ProductsContext);
  const { isAuthenticated } = useContext(UsersContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const BASE_URL = "https://backend-pitii-v2.vercel.app";
  //const BASE_URL = "http://localhost:5000";

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

  const fetchIngredients = async (productId) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/products/${productId}/ingredients`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setIngredients(data);
    } catch (error) {
      console.error("Failed to fetch ingredients:", error);
    }
  };

  const handleOpenModal = async (product) => {
    setCurrentProduct(product);
    await fetchIngredients(product.id);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setIngredients([]);
    setCurrentProduct(null);
  };

  const handleAddIngredient = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${BASE_URL}/api/products/${currentProduct.id}/ingredients`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ingredientName }),
        }
      );
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error response from server:", errorResponse); // Log do erro detalhado
        throw new Error("Network response was not ok");
      }
      const newIngredient = await response.json();
      setIngredients([...ingredients, newIngredient]);
      setIngredientName("");
    } catch (error) {
      console.error("Failed to add ingredient:", error);
    }
  };

  const handleRemoveIngredient = async (ingredientId) => {
    await fetch(
      `${BASE_URL}/api/products/${currentProduct.id}/ingredients/${ingredientId}`,
      {
        method: "DELETE",
      }
    );
    setIngredients(
      ingredients.filter((ingredient) => ingredient.id !== ingredientId)
    );
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
                <Button onClick={() => handleOpenModal(product)}>
                  Ver Ingredientes
                </Button>
              </div>
            )}
            {!isAuthenticated && (
              <Button onClick={() => handleOpenModal(product)}>
                Ver Ingredientes
              </Button>
            )}
          </li>
        ))}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <h2>Ingredientes de {currentProduct?.name}</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name}
              {isAuthenticated && (
                <Button onClick={() => handleRemoveIngredient(ingredient.id)}>
                  Remover
                </Button>
              )}
            </li>
          ))}
        </ul>
        {isAuthenticated && (
          <form onSubmit={handleAddIngredient}>
            <input
              type="text"
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
              placeholder="Novo Ingrediente"
            />
            <Button type="submit">Adicionar Ingrediente</Button>
          </form>
        )}
        <Button onClick={handleCloseModal}>Fechar</Button>
      </Modal>
    </Container>
  );
};

export default Products;
