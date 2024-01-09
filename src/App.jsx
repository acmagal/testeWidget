import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const ZENDESK_KEY = "fbfdcf1d-bf26-4d17-a822-00401fe499ae"
import Zendesk, { ZendeskAPI } from './ZendexConfig'


function App() {


  return (
    <body>
    
      <div>
      <Zendesk defer zendeskKey = {ZENDESK_KEY} />
      </div>
    </body>
  )

  
}


export default App
