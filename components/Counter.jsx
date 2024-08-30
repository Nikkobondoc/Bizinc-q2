import React, { useState } from 'react';

function Counter() {
    // start count from 0
    const [count, setCount] = useState(0);

    // increase by 1
    const increment = () => {
        setCount(count + 1);
    };

    // decrease by 1
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='counter'>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;

// the purpose of a 'useEffect hook' lets the components do things after it has appeared on the screen. example would be using it for an api like my movie database https://nikkobondoc.com/WOWIES/