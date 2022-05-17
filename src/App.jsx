import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { fetchConfig } from './services'
import { setTheme } from './styles'

import Links from './components/Links'

function App() {
  
  useEffect(() => {
    async function getConfig() {
      console.log("loading config")
      console.time("setTheme")
       const config = await fetchConfig()
      console.log("config loaded", config.theme)
       setTheme(config.theme)
      setIsInitialized(true)
      console.timeEnd("setTheme")
      
    }
    getConfig()
  }, [])
  
  
  const [counto, setCount] = useState(1)
  const [isInitialized, setIsInitialized] = useState(false)
  const hello = 1;

  if(!isInitialized) { 
    return (
      <div className="App">Loading...</div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Vite rocks a</p>
        <p>
          <button type="button" onClick={() => setCount((counto) => counto + 1)}>
            cuount is: {counto}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <Links/>
      </header>
    </div>
  )
}

export default App
