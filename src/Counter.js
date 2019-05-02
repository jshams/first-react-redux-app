import React from 'react'

const Counter = (props) => {
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={() => props.increment()}>up</button>
            <button onClick={() => props.decrement()}>down</button>
            <button onClick={() => props.reset()}>reset</button>
        </div >
    )
}

export default Counter