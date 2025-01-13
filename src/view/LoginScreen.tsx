import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { validateLogin } from '../controllers/AuthController';
import styles from '../styles/styles';

interface LoginScreenProps {
  onLoginSuccess: (username: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    if (validateLogin(username, password)) {
      setError('');
      onLoginSuccess(username);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logoimg.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome back!</Text>
      <Text style={styles.subText}>Log in to your existing account</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
