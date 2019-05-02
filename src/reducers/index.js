import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

const reducers = combineReducers({
    counters: counterReducer,
})

export default reducers