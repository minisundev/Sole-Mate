import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.tsx';

export const App: React.FC = () => {
  const loggedIn = false; 
  const email = 'user@example.com'; 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage loggedIn={loggedIn} email={email} />} />
      </Routes>
    </Router>
  );
}

export default App;
