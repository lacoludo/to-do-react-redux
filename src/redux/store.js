import {combineReducers, createStore} from 'redux'
import toDo from './reducers/toDo'
import filter from './reducers/filter'

let rootReducer = combineReducers({toDo, filter})
let store = createStore(rootReducer)

export default store