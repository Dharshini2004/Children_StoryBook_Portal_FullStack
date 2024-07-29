import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/table/Table'
import Barchart from './components/Barchart'
import { Grid } from '@mui/material'
import ButtonComponent from './ButtonComponent'

function App() {
  const handleClick=()=>
  {
    console.log("in");
  }

  return (
    <div>
      
      {/* <Table/>
      <Barchart/> */}
      <ButtonComponent backgroundColor={"red"} text={"Test Button"} event={handleClick}/>

      
    </div>
    
  )
}

export default App
