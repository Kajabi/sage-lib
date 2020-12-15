import axios from "axios";

export const getNews = (page = 1) => {
  const options = {
    method: 'GET',
    url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
    params: {q: 'Star Wars', lang: 'en', page, page_size: '25', media: 'True'},
    headers: {
      'x-rapidapi-key': 'API_KEY_GOES_HERE', // Get an api key at https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/newscatcher
      'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
    }
  };
  
  return axios.request(options).then((response) => {
    console.log(response.data);
    return response.data;
  }).catch((error) => {
    console.warn(error);
    console.warn('You likely need to set up an API key with Newscatcher.');
  });
};
