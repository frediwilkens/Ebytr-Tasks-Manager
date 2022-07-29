import axios from 'axios';

const { REACT_APP_HOSTNAME, REACT_APP_BACKEND_PORT } = process.env;

const api = axios.create({
  baseURL: `http://${REACT_APP_HOSTNAME}:${REACT_APP_BACKEND_PORT}`,
});

export default api;