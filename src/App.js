import React, { useState } from "react";
import "./App.css";

function App() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return <div className="App">
        <h1>Counter</h1>
        <div>{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
}

export default App;