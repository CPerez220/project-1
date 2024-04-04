import { useState } from 'react'
import './App.css'
import Home from "./pages/Home"

const BASE_API_URL= `https://fsa-puppy-bowl.herokuapp.com/api/2402-DEMOS-REACT/`;

function App() {
  

  return (
    <>
      <Home BASE_API_URL={BASE_API_URL}/>
    </>
  )
}

export default App
