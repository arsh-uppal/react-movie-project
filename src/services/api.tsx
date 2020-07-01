import axios from 'axios';

import {BASE_URL} from '../config/apiConfig';

export const getData = async (
  contentFor: string,
  searchQuery: string,
  pageNum: number = 1,
) => {
  let _param: any = {
    api_key: process.env.REACT_APP_API_KEY,
    page: pageNum,
  };

  if (searchQuery.length > 0) {
    _param['query'] = searchQuery;
  }

  const url = BASE_URL;
  try {
    const response = await axios.get(url + contentFor, {
      params: _param,
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};
