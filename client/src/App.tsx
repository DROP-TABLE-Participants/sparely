import React from "react";
import { Route, Routes } from "react-router-dom";
import { CharityInfoPage } from "./pages/CharityInfoPage";
import { DashboardPage } from "./pages/DashboardPage";
import { SettingsPage } from "./pages/SettingsPage";
import { CharitiesPage } from "./pages/CharitiesPage";
import { LandingPage } from "./pages/LandingPage";

import "./App.scss";
import { AuthPage } from "./pages/Auth";
import AuthGuard from "./components/AuthGuard";
import { AuthGuardTestPage } from "./pages/AuthGuardTestPage";

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={ <LandingPage/>} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={ <DashboardPage />} />
        <Route path="/settings" element={ <SettingsPage />} />
        <Route path="/charity/:id" element={ <CharityInfoPage />}/>
        <Route path="/charities" element={ <CharitiesPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
