// responsible for handling increment and decrement situations
import { INCREMENT, DECREMENT, RESET } from '../actions'

const counterReducer = (state = 0, action) => {
    // two parameters:
    //  state is the current state
    //  action is the action we are calling on the state
    switch (action.type) {
        case INCREMENT:
            return state += action.payload
        case DECREMENT:
            return state -= action.payload
        case RESET:
            return action.payload
        default:
            return state
    }
}

export default counterReducer