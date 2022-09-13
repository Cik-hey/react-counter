import './App.css';
import CounterGroup from "./features/counter/CounterGroup";

function App() {
  const size = 10;
  return (
    <div className="App">
      <CounterGroup sizeNumber = {size}/>
    </div>
  );
}

export default App;
