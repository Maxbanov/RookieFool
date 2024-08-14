import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUsuarioA, buscarUsuarioB } from '../api/api';

const UsuarioAScreen = () => {
  const [objeto, setObjeto] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [fecha, setFecha] = useState('');
  const [rango, setRango] = useState('');
  const navigate = useNavigate();

  const handleCrearUsuarioA = async () => {
    try {
      const data = {
        objeto,
        ciudad,
        fecha,
        rango,
      };
      await createUsuarioA(data);
      console.log('Usuario A creado con éxito');
      // Limpiar los campos del formulario después de crear el Usuario A
      setObjeto('');
      setCiudad('');
      setFecha('');
      setRango('');
    } catch (error) {
      console.error('Error al crear el Usuario A:', error);
    }
  };

  const handleBuscarUsuarioB = async () => {
    try {
      const data = {
        objeto,
        ciudad,
        fecha,
        rango,
      };
      const response = await buscarUsuarioB(data);
      const resultados = response.data;
      console.log('Búsqueda realizada con éxito');
      // Navegar a la pantalla de resultados y pasar los resultados como estado
      navigate('/resultados', { state: { resultados } });
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  return (
    <div>
      <h2>Usuario A</h2>
      <input
        type="text"
        placeholder="Objeto"
        value={objeto}
        onChange={(e) => setObjeto(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ciudad"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      <input
        type="date"
        placeholder="Fecha"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <input
        type="text"
        placeholder="Rango"
        value={rango}
        onChange={(e) => setRango(e.target.value)}
      />
      <button onClick={handleCrearUsuarioA}>Crear Usuario A</button>
      <button onClick={handleBuscarUsuarioB}>Buscar</button>
      <button onClick={() => navigate('/')}>Volver</button>
    </div>
  );
};

export default UsuarioAScreen;