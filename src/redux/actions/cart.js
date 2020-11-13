import qs from 'qs';
import http from '../../helpers/http';

export default {
  postCart: (token, data) => ({
    type: 'POST_CART',
    payload: http(token).post('private/customer/cart', qs.stringify(data)),
  }),
  getCart: (token) => ({
    type: 'GET_CART',
    payload: http(token).get('private/customer/cart'),
  }),
  updateCart: (token, data) => ({
    type: 'UPDATE_CART',
    payload: http(token).patch('private/customer/cart', qs.stringify(data)),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
