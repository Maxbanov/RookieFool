import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from '../api/api';

const LoginScreen = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = {
        usuario,
        password,
        tipoUsuario,
      };
      const response = await loginUsuario(data);
      
      if (response.status === 200) {
        console.log('Inicio de sesión exitoso');
        // Redirigir al usuario según el tipo seleccionado
        if (tipoUsuario === 'Usuario A') {
          navigate('/usuarioA');
        } else if (tipoUsuario === 'Usuario B') {
          navigate('/usuarioB');
        }
      } else {
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <h2>Inicio de Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setTipoUsuario('Usuario A')}>Usuario A</button>
      <button onClick={() => setTipoUsuario('Usuario B')}>Usuario B</button>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginScreen;