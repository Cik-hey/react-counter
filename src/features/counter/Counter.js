import { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number + 1);
    }

    const decrease = () => {
        setNumber(number - 1);
    }

    return <div>
        <button type="button" onClick={increase}>+</button>
        <span>{number}</span>
        <button type="button" onClick={decrease}>-</button>
    </div>
}

export default Counter;