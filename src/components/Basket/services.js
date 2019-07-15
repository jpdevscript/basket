import axios from 'axios';
import { port, hostName } from './constants';

export const fetchListData = async () => {
  try {
    const response = await axios.get(`http://${hostName}:${port}/api/list`);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log('error.in.response...', error);
    return error;
  }
}