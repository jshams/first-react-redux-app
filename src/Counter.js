import React from 'react'
import { increment, decrement, reset } from './actions'
import { connect } from 'react-redux'

const Counter = (props) => {
    return (
        <div>
            <h1>{props.count}</h1>
            <button
                onClick={() => props.increment(5)}
            >up</button>
            <button
                onClick={() => props.decrement(5)}
            >down</button>
            <button
                onClick={() => props.reset(0)}
            >reset</button>
        </div >
    )
}

const mapStateToProps = (state) => {
    return { count: state.counter }
}

const mapStateToDispatch = () => {
    return {
        increment,
        decrement,
        reset
    }
}

export default connect(mapStateToProps, mapStateToDispatch())(Counter)