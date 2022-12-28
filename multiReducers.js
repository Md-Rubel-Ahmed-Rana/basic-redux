const {createStore, combineReducers, applyMiddleware} = require("redux")
const { default: logger } = require("redux-logger")

// products constants
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCTS = "ADD_PRODUCTS"


// products constants
const GET_CART = "GET_CART"
const ADD_CART = "ADD_CART"

// products state
const productsState = {
    products: ["Shoe", "Sun Glass"]
}
// cart state
const cartState = {
    cart: ["Shoe", "Sun Glass"]
}

// get product action
const getProductsAction = () => {
    return {
        type: GET_PRODUCTS
    }
}

// get product action
const addProductsAction = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}

// get product action
const getCartAction = () => {
    return {
        type: GET_CART
    }
}

// get product action
const addCartAction = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
}



// products reducer
const productReducer = (state = productsState, action) =>{
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
    
        default:
          return  state;
    }
}


// products reducer
const cartReducer = (state = cartState, action) =>{
    switch (action.type) {
        case GET_CART:
            return {
                cart: [...state.cart]
            }
        case ADD_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
    
        default:
           return state;
    }
}


// combine multiple reducers
const rootReducer = combineReducers({
    cartReducer,
    productReducer
})


// create a store 
const store = createStore(rootReducer, applyMiddleware(logger));

// subscribe the store
store.subscribe(() => {
    // get the products with getState() method
    console.log(store.getState());
})

// dispatch products action
store.dispatch(getProductsAction())
store.dispatch(addProductsAction("pen"))


// dispatch products action
store.dispatch(getCartAction())
store.dispatch(addCartAction("pen"))
