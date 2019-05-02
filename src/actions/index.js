const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const ADD_COUNTER = 'ADD_COUNTER'

const increment = (index, val = 1) => ({ type: INCREMENT, payload: { index, val } })
const decrement = (index, val = 1) => ({ type: DECREMENT, payload: { index, val } })
const reset = (index, val = 0) => ({ type: RESET, payload: { index, val } })
const addCounter = (val = 0) => ({ type: ADD_COUNTER, payload: { val } })

export { INCREMENT, DECREMENT, RESET, ADD_COUNTER, increment, decrement, reset, addCounter }