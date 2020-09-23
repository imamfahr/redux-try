import {combineReducers} from 'redux';

import {getProductsReducer as products} from '../reducers/reducers';


const rootReducer = combineReducers({ products });

export default rootReducer