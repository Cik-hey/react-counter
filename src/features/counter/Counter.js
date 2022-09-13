import { useState } from "react";
import { useEffect } from "react";

const Counter = (props) => {
    const [number, setNumber] = useState(0);
    const {updateSum, sizeNumberChange} = props;

    const increase = () => {
        setNumber(number + 1);
        updateSum(1);
    }

    const decrease = () => {
        setNumber(number - 1);
        updateSum(-1);
    }
    
    useEffect (() => {
        setNumber(0);
     }, [sizeNumberChange])

    return <div>
        <button type="button" onClick={increase}>+</button>
        <span>{number}</span>
        <button type="button" onClick={decrease}>-</button>
    </div>
}

export default Counter;