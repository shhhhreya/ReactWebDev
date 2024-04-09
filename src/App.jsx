import { useState } from 'react'
import './App.css'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Toggler from './Toggler';
import ColorBoxes from './ColorBoxes';
import ColorBox from './ColorBox';
const colors=[
  "#fff100",
  "#ff8c00",
  "	#e81123",
  "magenta",
  "#68217a",
  "00b294",
  "cyan",
  "lime",
  "teal",
  "green"
];
function App() {

  return (
    <div>
      <h2>Click and match all the boxes!</h2>
      <ColorBoxes colors={colors} />
    </div>
)
}

export default App
