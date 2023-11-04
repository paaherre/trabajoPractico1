import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import Header from './components/Header'
import Discounts from './components/Discounts'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Discounts />
      <RegistrationForm />
      <Footer />
    </>
  )
}

export default App
