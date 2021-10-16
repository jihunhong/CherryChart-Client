import axios from 'axios';

export const baseURL = 'http://localhost:3000';
export const API_URL = 'https://api.cherrychart.com';
export const cdnURL = 'https://cdn.cherrychart.com';

export const SIDEBAR_WIDTH = 250;

export const fetcher = url => axios.get(url, { withCredetials: true }).then(result => result.data);

export const siteNames = ['Melon', 'Genie', 'Bugs'];
