
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countersReducer from '../reducer/countersReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        count:countersReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore


