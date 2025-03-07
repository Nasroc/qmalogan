import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import NavBar from './navbar/nav'
import { Dashboard } from './Dashboard/dashboard'
import { Events_Schedule } from './Calendar/events_schedule'
import { Resources } from './Resources/Resources'
import './App.css'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <NavBar
          isSignedIn={isSignedIn}
          onSignInSuccess={() => setIsSignedIn(true)}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<div>Team Component</div>} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events-schedule" element={<Events_Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
