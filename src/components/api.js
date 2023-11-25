import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = '6692a5b44fd4d65b0502919df9787c03';

export const FetchTrends = async () => {
  const options = {
    url: 'trending/movie/day',
    params: {
      api_key: key,
    },
  };
  const response = await axios(options);
  return response.data.results;
};

export const FetchSearch = async query => {
  const options = {
    url: 'search/movie',
    params: {
      api_key: key,
      query: query,
    },
  };
  const response = await axios(options);
  return response.data.results;
};

export const FetchMovie = async id => {
  const options = {
    url: `movie/${id}`,
    params: {
      api_key: key,
    },
  };
  const response = await axios(options);
  return response.data;
};

export const FetchCast = async id => {
  const options = {
    url: `movie/${id}/credits`,
    params: {
      api_key: key,
    },
  };
  const response = await axios(options);
  return response.data.cast;
};

export const FetchReviews = async id => {
  const options = {
    url: `movie/${id}/reviews`,
    params: {
      api_key: key,
    },
  };
  const response = await axios(options);
  return response.data.results;
};
