import './index.css'
import App from './pages/App.jsx'

import React from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hello from './pages/hello.jsx'
import UserProfile from './pages/userProfile.jsx'
import ImageSlider from './pages/ImageSlider.jsx'
import Minesweeper from './pages/Minesweeper.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/minesweeper" element={<Minesweeper />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
