import React, { useState } from 'react';
import { UserProvider } from './context/UserContext';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleNavigateToUser = (userId) => {
    setSelectedUserId(userId);
    setCurrentPage('details');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
    setSelectedUserId(null);
  };

  return (
    <UserProvider>
      {currentPage === 'dashboard' ? (
        <Dashboard onNavigate={handleNavigateToUser} />
      ) : (
        <UserDetails userId={selectedUserId} onBack={handleBackToDashboard} />
      )}
    </UserProvider>
  );
}

export default App;