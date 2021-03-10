import {useState} from 'react'

function App() {
    const [state, setState] = useState({count: 0, theme: "blue"})
    const count = state.count
    const theme = state.theme
    // // or we can create 2 different hooks instead:
    // const [count, setCount] = useState(0)
    // const [theme, setTheme] = useState('blue')
    // const decrementCount = () => {
    //     if (count > 0) {
    //         setCount(prevCount => prevCount - 1)
    //     }
    // }

    const decrementCount = () => {
        if (count > 0) {
            setState(prevState => {
                return {...prevState, count: prevState.count - 1}
            })
        }
    }

    const incrementCount = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count + 1}
        })
    }

    const changeTheme = () => {
        setState(prevState => {
            return prevState.theme === 'blue' ? {...prevState, theme: 'red'} : {...prevState, theme: 'blue'}
        })
    }

    return (
        <>
            <div>
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
            </div>
            <div>
                <button onClick={changeTheme}>{theme}</button>
            </div>
        </>
    );
}

export default App;
