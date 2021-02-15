import axios from 'axios';

const headers = {
  'x-rapidapi-key': 'API_KEY_GOES_HERE', // Get an api key at https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/newscatcher
  'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
};

const standardError = (error) => {
  console.warn(error); // eslint-disable-line
  console.warn('You likely need to set up an API key with Newscatcher.'); // eslint-disable-line
};

export const getNews = (page = 1) => {
  const options = {
    headers,
    method: 'GET',
    params: { q: 'Star Wars', lang: 'en', page, page_size: '25', media: 'True' },
    url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
  };

  return axios.request(options).then((response) => response.data).catch(standardError);
};

export const searchNews = (q, page = 1) => {
  if (!q) {
    return [];
  }

  const options = {
    headers,
    method: 'GET',
    params: { q, page, page_size: '25', lang: 'en', media: 'True' },
    url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
  };

  return axios.request(options).then((response) => response.data).catch(standardError);
};
