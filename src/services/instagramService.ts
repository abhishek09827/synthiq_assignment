import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const INSTAGRAM_API_URL = process.env['INSTAGRAM_API_URL']!;

export const getInstagramData = async () => {
  const response = await axios.get(INSTAGRAM_API_URL);
  return response.data;
};
