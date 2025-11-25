import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate } from "react-router-dom";

const userInitialState = { name: "", email: "", password: "" };

function Login() {
  const [userForm, setUser] = useState(userInitialState);
  const { user, login } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userForm.name, userForm.password);
    setUser(userInitialState);
  };

  if (user) {
    return <Navigate to="/admin/alta-productos" />;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow rounded bg-light w-100"
      >
        <h2 className="text-center mb-4 text-black">Iniciar sesión</h2>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={userForm.name}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            required
            className="form-control"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={userForm.email}
            onChange={handleChange}
            placeholder="Ingresa tu email"
            required
            className="form-control"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={userForm.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            required
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Login;
