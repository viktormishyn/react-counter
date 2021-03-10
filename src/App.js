import {useState} from 'react'

function App() {
    // runs every time we render the component, slowing down the performance
    // const [count, setCount] = useState(0)

    // also if we pass a function it will run every time we render the component
    // const initialCount() {
    //   console.log('run function')
    //   return 0
    // }
    // const [count, setCount] = useState(initialCount)

    // runs only the first time the component renders
    const [count, setCount] = useState(() => {
        console.log('run function')
        return 0
    })

    const decrementCount = () => {
        if (count > 0) {
            setCount(count-1)
        }
        // setCount(prevCount => prevCount - 1)
        // setCount(prevCount => prevCount - 1)
    }

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    );
}

export default App;
