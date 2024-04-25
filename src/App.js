
import { useState } from "react";


const Counter = ({ n }) => {
  const [count, setCount] = useState(() => {
    console.log("inside callback");
    let sum = 0;
    for (let i = 1; i <= n; i++)
      sum += i;
    return sum;
  });
  
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return (
    <div>
      <button onClick={dec}>Dec</button>
      <h2>Count: {count}</h2>
      <button onClick={inc}>Inc</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter n={20} />
    </div>
  );
}


export default App;