
import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.punkapi.com/',
});

export const getAllRecipes = async ({ page = 1, per_page = 15}) => {
  const result = await instance.get(
    `v2/beers?page=${page}&per_page=${per_page}`
  );
  
  return result.data;
};

// https://api.punkapi.com/v2/beers?page=1