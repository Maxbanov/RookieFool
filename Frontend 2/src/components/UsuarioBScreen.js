import React, { useState } from 'react';
import { createUsuarioB } from '../api/api';

const UsuarioBScreen = () => {
  const [objeto, setObjeto] = useState('');
  const [precio, setPrecio] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [fecha, setFecha] = useState('');
  const [rango, setRango] = useState('');

  const handlePublicar = async () => {
    try {
      const data = {
        objeto,
        precio,
        ciudad,
        fecha,
        rango,
      };
      await createUsuarioB(data);
      console.log('Publicación realizada con éxito');
      // Limpiar los campos del formulario después de la publicación exitosa
      setObjeto('');
      setPrecio('');
      setCiudad('');
      setFecha('');
      setRango('');
    } catch (error) {
      console.error('Error al realizar la publicación:', error);
    }
  };

  return (
    <div>
      <h2>Usuario B</h2>
      <input
        type="text"
        placeholder="Objeto"
        value={objeto}
        onChange={(e) => setObjeto(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
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
      <button onClick={handlePublicar}>Publicar</button>
      <button>Volver</button>
    </div>
  );
};

export default UsuarioBScreen;