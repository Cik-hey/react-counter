import Counter from "./Counter"

const CounterGroup = (props) => {
    const {sizeNumber, updateSum} = props;
    const sizeGroup = Array(sizeNumber).fill(0);
    const getSum = (number) => {
        updateSum(number)
    }
    return sizeGroup.map((item, index) => {
        return <Counter key={index} updateSum={getSum} sizeNumberChange={sizeNumber}/>
    })
}

export default CounterGroup;