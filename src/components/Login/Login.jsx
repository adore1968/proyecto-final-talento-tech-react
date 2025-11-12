import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext/useAuthContext';

const userInitialState = { name: '', email: '', pass: '' };

function Login() {
  const [user, setUser] = useState(userInitialState);
  const { login } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user.name);
    setUser(userInitialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={user.name}
        onChange={handleChange}
        placeholder='Ingresa tu nombre'
        required
      />
      <input
        type='email'
        name='email'
        value={user.email}
        onChange={handleChange}
        placeholder='Ingresa tu email'
        required
      />
      <input
        type='password'
        name='pass'
        value={user.pass}
        onChange={handleChange}
        placeholder='Ingresa tu contraseña'
        required
      />
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default Login;
