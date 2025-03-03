import { useState } from 'react'
import NavBar from './navbar/nav'
import { Dashboard } from './Dashboard/dashboard'
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Dashboard />
    </div>
  )
}

export default App
