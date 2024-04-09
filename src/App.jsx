import { useState } from 'react'
import './App.css'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList';
import Clicker from './Clicker';


function App() {
  const [count, setCount] = useState(0);

  const handleClickIncrease = ()=>{
    setCount(count + 1);
  }
  const handleClickDecrease = ()=>{
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={handleClickDecrease}>Decrease</button>
      <p>The count is: {count}</p>
      <button onClick={handleClickIncrease}>Increase</button>
    </div>
)
}

export default App
