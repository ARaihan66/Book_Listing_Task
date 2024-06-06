// lib/api.js
import axios from 'axios';

const API_URL = 'http://192.168.0.157:8000/books';

export const fetchBooks = async (params = {}) => {
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
