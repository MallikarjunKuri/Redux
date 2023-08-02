
import { GET_API, ADD_TO_CART } from '../Types'

export const increment = () => {
  return {
    type: 'COUNT_INCRESE',
  };
};

export const decrement = () => {
  return {
    type: 'COUNT_DECRESE',
  };
};
//Action for getting API Data from server.
export const getApiDataMethod = data => ({
  type: GET_API,
  payload: data,
});

//Action for add to cart
 export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload:item
  }
};