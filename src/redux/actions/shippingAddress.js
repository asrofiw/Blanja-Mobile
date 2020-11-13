import http from '../../helpers/http';
import qs from 'qs';

export default {
  getShippingAddress: (token) => ({
    type: 'GET_SHIPPING_ADDRESS',
    payload: http(token).get('private/customer/shipping-address'),
  }),
  postShippingAddress: (token, data) => ({
    type: 'POST_SHIPPING_ADDRESS',
    payload: http(token).post(
      'private/customer/shipping-address',
      qs.stringify(data),
    ),
  }),
  clearMessageStatus: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
