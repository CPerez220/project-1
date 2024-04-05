import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import List from "./pages/List"
import {Routes, Route} from "react-router-dom"

const BASE_API_URL= `https://fsa-puppy-bowl.herokuapp.com/api/2402-DEMOS-REACT/`;

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/List" element={<List/>}/>
      </Routes>
    </>
  )
}

export default App
