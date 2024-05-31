import React, { useContext, useState } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "./styles";

const Users = () => {
  const { users, updateUser, deleteUser } = useContext(UsersContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(currentUser.id, { name, email });
    setCurrentUser(null);

    setName("");
    setEmail("");
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  return (
    <Container>
      <h2>Gerenciador de usuários</h2>
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
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit">Editar Usuário</Button>
      </form>
      <Button onClick={() => navigate("/register")}>Adicionar Usuário</Button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <Button onClick={() => handleEdit(user)}>Editar</Button>
            <Button onClick={() => handleDelete(user.id)}>Deletar</Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Users;
