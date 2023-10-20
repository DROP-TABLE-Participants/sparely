import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { CharityInfoPage } from './Pages/CharityInfoPage'
import { DashboardPage } from './Pages/DashboardPage'
import {SettingsPage} from './Pages/SettingsPage'

import './App.css'
import { AuthPage } from './Pages/Auth'

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/charity/:id" element={<CharityInfoPage />} />
      <Route path="/auth" element={<AuthPage/>} />
    </Routes> 
    </>
  )
}

export default App
