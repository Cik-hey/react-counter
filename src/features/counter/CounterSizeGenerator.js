import { useState } from "react";
import CounterGroup from "./CounterGroup";

const CounterSizeGenerator = (props) => {
    const [size, setSize] = useState(0);
    const { onSizeChange } = props;

    const onChange = (event) => {
        const inputValue = event.target.value;
        const sizeNumber = inputValue === '' ? 0 : parseInt(inputValue);
        setSize(inputValue);
        onSizeChange(sizeNumber);
    }
    return (
    <div>
        <span>Size: </span>
        <input type="number" min={0} value={size} onChange={onChange} />
    </div>
    );
};

export default CounterSizeGenerator;