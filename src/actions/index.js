const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const increment = (val = 1) => ({ type: INCREMENT, payload: val })
const decrement = (val = 1) => ({ type: DECREMENT, payload: val })
const reset = (val = 0) => ({ type: RESET, payload: val })

export { INCREMENT, DECREMENT, RESET, increment, decrement, reset }