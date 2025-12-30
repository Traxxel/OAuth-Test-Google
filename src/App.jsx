import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import HalloWelt from './pages/HalloWelt'
import { AuthProvider } from './context/AuthContext'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hallo-welt" element={<HalloWelt />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App

