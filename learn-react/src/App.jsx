import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Profile(){
  return (

    <img 
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson">
    </img>
  )
}

function AdvProfile({src,alt}){
  return (

    <img 
      src= {src}
      alt={alt}/>
  )
}

function App() {

  return (
    <>
      <section>
        <h2>Amazing Scientists</h2>
        <Profile/>
        <AdvProfile 
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson from Adv profile"
        />
      </section>
    </>
  )
}

export default App
