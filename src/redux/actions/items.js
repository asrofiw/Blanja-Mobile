import http from '../../helpers/http';

export default {
  getData: () => ({
    type: 'GET_DATA',
    payload: http().get('public/items?limit=5'),
  }),
  getDataNewest: () => ({
    type: 'GET_DATA_NEWEST',
    payload: http().get('public/items?limit=5&sort[update_at]=desc'),
  }),
  getDataDetail: (id) => ({
    type: 'GET_DATA_DETAIL',
    payload: http().get(`public/items/${id}`),
  }),
};
