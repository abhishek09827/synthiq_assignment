import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const TWITTER_API_URL = process.env['TWITTER_API_URL']!;

export const getTwitterData = async () => {
  const response = await axios.get(TWITTER_API_URL);
  return response.data;
};
