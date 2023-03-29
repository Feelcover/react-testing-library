import React from 'react'
import { Routes,Route, Link, BrowserRouter } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'

const App = () => {
  return (
   <div>
    <Link to='/' data-testid="main-link" >MainPage</Link>
    <Link to='/about' data-testid="about-link">AboutPage</Link>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </div>
  )
}

export default App
