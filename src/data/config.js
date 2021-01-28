import axios from 'axios';

export const nameSection = "Electronics";

const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA4ODcxYTdlNzE4NzAwMjBlMzhlZTAiLCJpYXQiOjE2MTExNzE2MTB9.gRqbCL86qsiOXjaSoQeyuhM5e-wjonyGpb4gZqIf6sk';

const UserUrlApi = 'https://coding-challenge-api.aerolab.co/user/me';

const ProductsUrlApi = 'https://coding-challenge-api.aerolab.co/products';

// Asi funciona con fetch
// const headers = {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + Token
//     }
// } 
const headers = {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer ' + Token,
  };


export const getUser = () => {
  return axios.get(UserUrlApi, { headers });
};

export const getProducts = () => {
  return axios.get(ProductsUrlApi, { headers });
};