const { createStore } = require("redux")

// constants 
const ADD_USER = "ADD_USER"


// initial state
const initialState = {
    users: []
}

// add user type
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// initilize a reducer
const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload]
            }
    
        default:
            state;
    }
}

// store: getState(), dispatch(), subscribe()
// create store
const store = createStore(userReducer);

// subscribe store
store.subscribe(() => {
    // get the state value
    console.log(store.getState().users);
})

// dispatch
store.dispatch(addUser({name: "Rubel"}))
store.dispatch(addUser({name: "Mohin"}))
store.dispatch(addUser({name: "Rana"}))