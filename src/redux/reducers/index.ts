import {combineReducers} from 'redux';
import {CartReducer} from './cartReducer';
import {ProductReducer} from './productReducer';
import {ThemeReducer} from './themeReducer';

const rootReducer = combineReducers({
  cartReducer: CartReducer,
  themeReducer: ThemeReducer,
  productReducer: ProductReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
