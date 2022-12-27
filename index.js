const { createStore } = require("redux")

// constants 
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// initial state
const initialState = {
    count: 0
}

// increment counter function
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

// decrement counter function
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}


// initilize a reducer
const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }

        case DECREMENT:
            return {
                count: state.count - 1
            }
    
        default:
            state;
    }
}

// store: getState(), dispatch(), subscribe()
// create store
const store = createStore(counterReducer);

// subscribe store
store.subscribe(() => {
    // get the state value
    console.log(store.getState());
})

// dispatch
store.dispatch(incrementCounter())