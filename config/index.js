import axios from 'axios';

export const baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cherrychart.com';
export const API_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.cherrychart.com';
export const cdnURL = 'https://cdn.cherrychart.com';

export const SIDEBAR_WIDTH = 250;

export const fetcher = url => axios.get(url, { withCredetials: true }).then(result => result.data);

export const siteNames = ['Melon', 'Genie', 'Bugs'];
