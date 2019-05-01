const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const increment = () => ({ type: INCREMENT })
const decrement = () => ({ type: DECREMENT })
const reset = () => ({ type: RESET })

export { INCREMENT, DECREMENT, RESET, increment, decrement, reset }