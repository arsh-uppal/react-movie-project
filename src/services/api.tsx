import axios from 'axios';

import {API_KEY, BASE_URL, NO_OF_PAGES} from '../config/apiConfig';

export const getData = async (contentFor: string, searchQuery: string) => {
  let _param: any = {
    api_key: API_KEY,
    page: NO_OF_PAGES,
  };

  if (searchQuery.length > 0) {
    _param['query'] = searchQuery;
  }

  const url = BASE_URL;
  try {
    const response = await axios.get(url + contentFor, {
      params: _param,
    });
    const data = response.data.results;
    return data;
  } catch (error) {
    throw error;
  }
};
