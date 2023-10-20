import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { CharityInfoPage } from './pages/CharityInfoPage'
import { DashboardPage } from './pages/DashboardPage'
import { SettingsPage } from './pages/SettingsPage'
import { CharitiesPage } from './pages/CharitiesPage'

import './App.scss'
import { AuthPage } from './pages/Auth'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/charity/:id" element={<CharityInfoPage />} />
        <Route path="/charities" element={<CharitiesPage />} />
        <Route path="/auth" element={<AuthPage/>} />
      </Routes> 
    </>
  )
}

export default App
