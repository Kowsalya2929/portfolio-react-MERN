import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import { createTheme, ThemeProvider } from '@mui/material'
import {Box} from '@mui/material'

const App = () => {
  
  const [theme,setTheme] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: theme
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={'background.default'} color={'text.primary'} >
    <BrowserRouter>
    <NavBar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>   
    </Box>
    </ThemeProvider>
  )
}

export default App