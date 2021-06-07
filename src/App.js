import { useState } from "react";

export default function App() {
  const [state, setState] = useState({ count: 0, theme: "blue" });
  const count = state.count;

  function decrement() {
    if (count > 0) {
      setState((prevState) => {
        return { ...prevState, count: prevState.count - 1 };
      });
    }
  }

  function increment() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
