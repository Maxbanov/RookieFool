import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ListScreen = () => {
  const location = useLocation();
  const resultados = location.state?.resultados || [];
  const navigate = useNavigate();

  return (
    <div>
      <h2>Resultados de la búsqueda</h2>
      {resultados.length > 0 ? (
        <ul>
          {resultados.map((resultado) => (
            <li key={resultado._id}>
              {/* Mostrar los detalles del resultado */}
              <p>Objeto: {resultado.objeto}</p>
              <p>Precio: {resultado.precio}</p>
              <p>Ciudad: {resultado.ciudad}</p>
              <p>Fecha: {resultado.fecha}</p>
              <p>Rango: {resultado.rango}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
      <button onClick={() => navigate('/usuarioA')}>Volver</button>
    </div>
  );
};

export default ListScreen;