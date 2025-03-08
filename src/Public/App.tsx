import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { NavBar, Dashboard, Events_Schedule, Resources, Forms, Tenets, Pledges, Judo,} from './index';
import './App.css';

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
