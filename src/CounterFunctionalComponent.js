import React, {useState} from 'react'

const CounterFunctionalComponent = () => {

    // React Hook
    // const [count, setCount] = React.useState(0)
    const [count, setCount] = useState(0)

    return (
        <div>
            <div style={{backgroundColor:"yellow"}}>
                <h1>Counter Functional Component</h1>
                <h3>Counter: {count}</h3>
                <button onClick={()=> setCount(count+1)}>Add</button>
            </div>
        </div>
    )
}

export default CounterFunctionalComponent
