// need to add import: In a React.js app, the useState hook is used to manage state in functional components. It allows you to declare state variables and update them, triggering a re-render of the component when the state changes.

/*Here's a brief description of how to use useState:

Import the Hook:

import React, { useState } from 'react';

Declare State:

const [stateVariable, setStateVariable] = useState(initialValue);

stateVariable: The variable that holds the current state value.

setStateVariable: The function used to update the state.

initialValue: The initial value of the state.*/

import { useState } from "react"
import './App.css';

function App() {
  // Add count to function and insert {count} in between h1
  const [count, setCount] = useState(0);

  const addToCount = () => {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  //copy add function and make it subtract function
  const subtractFromCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  // add onClick to the buttons
  return (
    <div>
      <h4>The current count is...</h4>
      <h1>{count}</h1>
      <button onClick={subtractFromCount}>-</button>
      <button onClick={addToCount}>+</button>
    </div>
  )
}

export default App;
