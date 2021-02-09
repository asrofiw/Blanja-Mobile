import http from '../../helpers/http';

export default {
  getSubCategory: () => ({
    type: 'GET_SUBCATEGORY',
    payload: http().get('public/sub-category?limit=50'),
  }),
};
