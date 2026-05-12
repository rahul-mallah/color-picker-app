import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff', '#000000'];

  return (
    <div>
      <h1>Color Picker</h1>
      <div className='color-palette'>
        {colors.map((color, index) => (
          <div
            key={index}
            className='color-box'
            style={{backgroundColor: color}}
            onClick={() => {}}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default App
