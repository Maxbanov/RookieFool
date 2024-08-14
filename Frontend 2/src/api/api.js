import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const loginUsuario = (data) => {
  return axios.post(`${API_BASE_URL}/login`, data);
};

export const createUsuarioA = (data) => {
  return axios.post(`${API_BASE_URL}/usuarioA`, data);
};

export const createUsuarioB = (data) => {
  return axios.post(`${API_BASE_URL}/usuarioB`, data);
};

export const buscarUsuarioB = (data) => {
  return axios.post(`${API_BASE_URL}/usuarioA/buscar`, data);
};