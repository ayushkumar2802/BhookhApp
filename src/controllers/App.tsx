import React, { useState } from 'react';
import LoginScreen from './views/LoginScreen';
import HomeScreen from './views/HomeScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('Login');
  const [username, setUsername] = useState<string>('');

  const handleLoginSuccess = (username: string) => {
    setUsername(username);
    setCurrentScreen('Home');
  };

  return currentScreen === 'Login' ? (
    <LoginScreen onLoginSuccess={handleLoginSuccess} />
  ) : (
    <HomeScreen username={username} />
  );
};

export default App;
