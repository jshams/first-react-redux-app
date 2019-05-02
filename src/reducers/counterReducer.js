// responsible for handling increment and decrement situations
import { INCREMENT, DECREMENT, RESET, ADD_COUNTER } from '../actions'

const counterReducer = (state = [0], action) => {
    // two parameters:
    //  state is the current state
    //  action is the action we are calling on the state
    const newState = [...state]
    switch (action.type) {
        case INCREMENT:
            newState[action.payload.index] += action.payload.val
            return newState
        case DECREMENT:
            newState[action.payload.index] -= action.payload.val
            return newState
        case RESET:
            newState[action.payload.index] = action.payload.val
            return newState
        case ADD_COUNTER:
            newState.push(action.payload.val)
            return newState
        default:
            return state
    }
}

export default counterReducer