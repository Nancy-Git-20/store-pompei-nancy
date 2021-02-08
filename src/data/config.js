import axios from 'axios';

export const nameSection = "Electronics";

export const demoProd = {
  "id":"id",
  "name": "name",
  "cost": "0"
};

const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA4ODcxYTdlNzE4NzAwMjBlMzhlZTAiLCJpYXQiOjE2MTExNzE2MTB9.gRqbCL86qsiOXjaSoQeyuhM5e-wjonyGpb4gZqIf6sk';

const UserUrlApi = 'https://coding-challenge-api.aerolab.co/user/me';

const ProductsUrlApi = 'https://coding-challenge-api.aerolab.co/products';

const HistoryUrlApi = 'https://coding-challenge-api.aerolab.co/user/history';

const RedeemUrlApi = 'https://coding-challenge-api.aerolab.co/redeem'; 

// Asi funciona con fetch
// const headers = {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + Token
//     }
// }
//Asi funciona con AXIOS
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

export const getHistory = () => {
  return axios.get(HistoryUrlApi, { headers });
};

export const sendRedeemProd = (productId) => {
  const body = {
    productId,
  };
  return axios.post(RedeemUrlApi, body, { headers });
};
