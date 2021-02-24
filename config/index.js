import axios from "axios";

export const baseURL = process.env.NODE_ENV === 'production' 
        ? 'http://www.cherrychart.com'
        : 'http://localhost:8080';

export const SIDEBAR_WIDTH = 250;

export const fetcher = (url) => axios.get(url, { withCredetials : true })
                                        .then((result) => result.data)
                                        .catch((err) => err);