import axios from 'axios';

import {API_KEY, BASE_URL, NO_OF_PAGES} from '../config/apiConfig';

export const getData = async (searchQuery: string) => {
  const url = BASE_URL;
  try {
    const response = await axios.get(url + searchQuery, {
      params: {
        api_key: API_KEY,
        page: NO_OF_PAGES,
      },
    });
    const data = response.data.results;
    return data;
  } catch (error) {
    throw error;
  }
};
