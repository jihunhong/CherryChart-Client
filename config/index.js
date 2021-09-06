import axios from 'axios';

export const baseURL = 'https://15.165.197.208';
export const cdnURL = 'https://cdn.cherrychart.com';

export const SIDEBAR_WIDTH = 250;

export const fetcher = url => axios.get(url, { withCredetials: true }).then(result => result.data);

export const siteNames = ['Melon', 'Genie', 'Bugs'];
