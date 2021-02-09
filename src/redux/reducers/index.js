import {combineReducers} from 'redux';

import auth from './auth';
import items from './items';
import cart from './cart';
import checkout from './checkout';
import transaction from './transaction';
import profile from './profile';
import shippingAddress from './shippingAddress';
import subcategory from './subcategory';
import register from './register';

export default combineReducers({
  auth,
  items,
  cart,
  checkout,
  transaction,
  profile,
  shippingAddress,
  subcategory,
  register,
});
