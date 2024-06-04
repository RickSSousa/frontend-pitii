import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  //const BASE_URL = "https://backend-pitii-v2.vercel.app";
  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    if (product.image) {
      formData.append("image", product.image);
    }
    try {
      const response = await axios.post(`${BASE_URL}/api/products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProducts([...products, response.data]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    const formData = new FormData();
    formData.append("name", updatedProduct.name);
    formData.append("price", updatedProduct.price);
    if (updatedProduct.image) {
      formData.append("image", updatedProduct.image);
    } else {
      formData.append("imageUrl", updatedProduct.imageUrl);
    }
    try {
      const response = await axios.put(
        `${BASE_URL}/api/products/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProducts(
        products.map((product) => (product.id === id ? response.data : product))
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
