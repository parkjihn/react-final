import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from 'redux-thunk'
import { productListReducer } from './productListReducer'
import { cartReducer } from './cartReducer'
import { categoriesReducer } from './categoryReducer'

const rootReducer = combineReducers({
    productList: productListReducer,
    cartList: cartReducer,
    categoryList: categoriesReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))