import { useState } from 'react'
import './App.css'
import Form1 from './components/Form1.jsx'
import Form2 from './components/Form2.jsx'
import PokemonWebsite from './PokemonWebsite.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        
        <PokemonWebsite/>
      </div>
    </>
  )
}

export default App
