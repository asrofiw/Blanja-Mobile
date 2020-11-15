import qs from 'querystring';
import http from '../../helpers/http';

export default {
  createUserCustomer: (data) => ({
    type: 'CREATE_USER_CUSTOMER',
    payload: http().post('auth/register/customer', qs.stringify(data)),
  }),
  clearMessageStatus: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
