import React from 'react'
import { increment, decrement, reset, addCounter } from './actions'
import { connect } from 'react-redux'
import Counter from './Counter'

const CounterList = (props) => {
    return (
        <div>
            <button onClick={() => props.addCounter()}>Add Counter</button>
            {props.counters.map((count, i) => {
                return (<Counter
                    count={count}
                    increment={() => props.increment(i, 1)}
                    decrement={() => props.decrement(i, 1)}
                    reset={() => props.reset(i, 0)}
                />)
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { counters: state.counters }
}

const mapDispatchToProps = () => {
    return { increment, decrement, reset, addCounter }
}

export default connect(mapStateToProps, mapDispatchToProps())(CounterList)