import React, { useState} from 'react';
const useCounter = () =>{
    const [count, setCount] = useState(0);
    const inCrease = () => setCount( count +1 );
    const deCrease = () => setCount( count -1 );
    return [ count , inCrease , deCrease];
}
const Counter = () =>{
    const [ count , inCrease , deCrease] = useCounter()
    return (
        <div>
            <div>Current count: {count}</div>
            <div>
                <button onClick={deCrease}>-</button>
                <button onClick={inCrease}>+</button>
            </div>
        </div>
    )
}
export default Counter;