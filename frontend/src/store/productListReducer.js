

const defaultState = {
    categories_name: '',
    products: []
}

const ALL_PRODUCTS = 'ALL_PRODUCTS'
const ALL_PRODUCTS_SALE = 'ALL_PRODUCTS_SALE'
const PRODUCTS_BY_CATEGORY = 'PRODUCTS_BY_CATEGORY'
const FILTER_BY_SALE = 'FILTER_BY_SALE'
const FILTER_BY_PRICE = 'FILTER_BY_PRICE'

export const productListReducer = (state = defaultState, action) => {
    switch(action.type){
        case ALL_PRODUCTS:
            return {categories_name: 'All products', products: action.payload}
        case ALL_PRODUCTS_SALE:
            return {categories_name: 'Discounted products', products: action.payload}
        case PRODUCTS_BY_CATEGORY:
            return {categories_name: action.payload.category.title, products: action.payload.data}
         
            
    case FILTER_BY_SALE:
        let changedProductsBySale = state.products.map(elem => {
          elem.isShowSale = (!action.payload) ? true : Boolean(elem.discountPercentage);
          return elem;
        });
        return { ...state, products: changedProductsBySale };
  
      case FILTER_BY_PRICE:
        let { max, min } = action.payload;
        let changedProductsByPrice = state.products.map(elem => {
          elem.isShowPrice = true;
          if (!(elem.price >= min && elem.price <= max)) {
            elem.isShowPrice = false;
          }
          return elem;
        });
        return { ...state, products: changedProductsByPrice };
            
            
        default: 
        return state
    }
}

export const allProductsAction = (payload) => ({type: ALL_PRODUCTS, payload})
export const allProductsSaleAction = (payload) => ({type: ALL_PRODUCTS_SALE, payload})
export const productsByCategoryAction = (payload) => ({type: PRODUCTS_BY_CATEGORY, payload})
export const filterBySaleAction = (payload) => ({type: FILTER_BY_SALE, payload})
export const filterByPriceAction = (payload) => ({type: FILTER_BY_PRICE, payload})