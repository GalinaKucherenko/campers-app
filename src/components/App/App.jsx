import { useState } from 'react'
import './App.css'
import Campers from '../Campers/Campers'

function App() {
  const handleClick = () => {
    alert("I'm button");
  }
  const [clicks, setClicks] = useState(0);
  const handClick = () => {
    setClicks(clicks + 2);
  }

  return (
    <>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <Campers />
      
      <button onClick={handleClick}>View now</button>
      <button onClick={handClick}>Click me: {clicks }</button>

       
    </>
  )
}

export default App
