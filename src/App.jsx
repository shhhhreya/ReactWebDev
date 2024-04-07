import { useState } from 'react'
import './App.css'
import ShoppingList from './ShoppingList'



const data = [
  { name: "bread", quantity: 2, completed:true },
  { name: "milk", quantity: 1 , completed:false },
  { name: "eggs", quantity: 12, completed:false  },
];


function App() {

  return (
    <ShoppingList items = {data}/>
  )
}

export default App
