import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import { Countries, Country } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/countries" element={<Countries />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
