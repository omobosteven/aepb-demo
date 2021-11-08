import axios from 'axios';

const baseUrl =
  process.env.REACT_APP_BASE_API_URL || 'https://aepb-api.herokuapp.com/api';

export const Api = axios.create({
  baseURL: baseUrl
});
