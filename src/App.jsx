import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Shop from './components/shop/Shop'


function App() {
  return (
    <div className='app'>
     <Header></Header>
     <Shop></Shop> 
    </div>
  )
}

export default App
