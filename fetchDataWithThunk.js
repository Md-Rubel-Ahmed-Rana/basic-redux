const {createStore, applyMiddleware} = require("redux");
const thunk = require("redux-thunk").default


// constants
const TODOS_REQUEST = "TODOS_REQUEST"
const TODOS_SUCCESS = "TODOS_SUCCESS"
const TODOS_FAILED = "TODOS_FAILED"

// states
const initialState = {
    todos: [],
    isLoading: false,
    error: null
}
// actions
const todosRequest = () => {
    return {
        type: TODOS_REQUEST
    }
}

const todosFailed = (error) => {
    return {
        type: TODOS_FAILED,
        payload: error
    }
}

const todosSuccess = (todos) => {
    return {
        type: TODOS_SUCCESS,
        payload: todos
    }
}

// reducer

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
    
        default:
            state;
    }
}

// async action creator
const fetchData = () => {
    return (dispatch) => {
        dispatch(todosRequest())
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const todos = data.data
            dispatch(todosSuccess(todos))
        })
        .catch((error) => {
            dispatch(todosFailed(error))
        })
    }
}

// store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData())