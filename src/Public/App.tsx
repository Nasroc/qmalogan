import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { NavBar, Dashboard, Events_Schedule, Resources, Forms, Tenets, Pledges, Judo, } from './index';
import './App.css';

function App() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(() => {
    const savedSignedIn = localStorage.getItem('isSignedIn');
    return savedSignedIn ? JSON.parse(savedSignedIn) : false;
  });
  const [userRole, setUserRole] = useState<string | null>(() => {
    return localStorage.getItem('userRole');
  });

  const handleSignInSuccess = (role: string) => {
    setIsSignedIn(true);
    setUserRole(role);
    localStorage.setItem('isSignedIn', JSON.stringify(true));
    localStorage.setItem('userRole', role);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUserRole(null);
    localStorage.removeItem('isSignedIn');
    localStorage.removeItem('userRole');
  };

  useEffect(() => {
    const savedSignedIn = localStorage.getItem('isSignedIn');
    const savedUserRole = localStorage.getItem('userRole');
    if (savedSignedIn) {
      setIsSignedIn(JSON.parse(savedSignedIn));
    }
    if (savedUserRole) {
      setUserRole(savedUserRole);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar
          isSignedIn={isSignedIn}
          onSignInSuccess={handleSignInSuccess}
          onSignOut={handleSignOut}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<div>Team Component</div>} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events-schedule" element={<Events_Schedule isAdmin={userRole === 'admin'} />} />
          <Route path="/resources/forms" element={<Forms />} />
          <Route path="/resources/tenets" element={<Tenets />} />
          <Route path="/resources/pledges" element={<Pledges />} />
          <Route path="/resources/judo" element={<Judo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
