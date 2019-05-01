// responsible for handling increment and decrement situations
import { INCREMENT, DECREMENT, RESET } from '../actions'

const counterReducer = (state = 50, action) => {
    // two parameters:
    //  state is the current state
    //  action is the action we are calling on the state
    switch (action.type) {
        case INCREMENT:
            return state += 1
        case DECREMENT:
            return state -= 1
        case RESET:
            return 50
        default:
            return state
    }
}

export default counterReducer