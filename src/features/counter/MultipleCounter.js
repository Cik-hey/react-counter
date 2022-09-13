import { useEffect, useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator"
import CounterGroupSum from "./CounterGroupSum"

const MultipleCounter = () => {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        setSum(0);   
    }, [size]);

    const handleSizeChange = (size) => {
        console.log("Multiple Counter", size);
        setSize(size);
    }

    const handleSumUpdate = (changesNum) => {
        setSum(sum + changesNum);
    }
    return (
        <>
        <CounterSizeGenerator onSizeChange = {handleSizeChange}/>
        <CounterGroupSum sum={sum} />
        <CounterGroup sizeNumber={size} updateSum={handleSumUpdate}/>
        </>
    );
};

export default MultipleCounter;