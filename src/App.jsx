import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Game from './components/Game'
import Play from './components/Play'

import {  Route, Routes } from 'react-router-dom'


function App() {

  const [myChoice, setMyChoice] = useState("")
  const [score, setScore] = useState(0)
 

  return (
    <>
    <div className="container">
      <Header score={score}/>
      <Routes>
        <Route exact path="/" element={<Play setMyChoice={setMyChoice}/>}/>
        <Route path="/game" element ={<Game myChoice={myChoice} score={score} setScore={setScore}/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
