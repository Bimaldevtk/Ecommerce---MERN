import './App.css'
import {Routes, Route } from 'react-router-dom'
import Layout from './Auth/Layout'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import React from 'react'

function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1>Header Component</h1>
      <Routes>
        {/* Define the Layout as a parent route for Auth */}
        <Route path="/auth" element={<Layout />}>
          {/* Nested routes for Login and Register */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
