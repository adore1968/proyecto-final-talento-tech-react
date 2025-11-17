import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext/useAuthContext';

const userInitialState = { name: '', email: '', password: '' };

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={userForm.name}
        onChange={handleChange}
        placeholder='Ingresa tu nombre'
        required
      />
      <input
        type='email'
        name='email'
        value={userForm.email}
        onChange={handleChange}
        placeholder='Ingresa tu email'
        required
      />
      <input
        type='password'
        name='password'
        value={userForm.password}
        onChange={handleChange}
        placeholder='Ingresa tu contraseña'
        required
      />
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default Login;
