import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import UsuarioAScreen from './components/UsuarioAScreen';
import UsuarioBScreen from './components/UsuarioBScreen';
import ListScreen from './components/ListScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route path="/usuarioA" element={<UsuarioAScreen />} />
          <Route path="/usuarioB" element={<UsuarioBScreen />} />
          <Route path="/resultados" element={<ListScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
