import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<{ screen: string; username: string | null }>({ screen: 'Login', username: null });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Mock JSON for authentication
  const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'Ayush', password: 'pass2' },
    { username: 'user3', password: 'pass3' },
  ];

  const validateLogin = () => {
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      setError('');
      setCurrentScreen({ screen: 'Home', username });
    } else {
      setError('Invalid credentials');
    }
  };


  return currentScreen.screen === 'Login' ? (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image
        source={require('./assets/logoimg.png')}
        style={styles.logo}
      />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome back!</Text>
      <Text style={styles.subText}>Log in to your existing account</Text>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* Error Message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={validateLogin}>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      {/* Forget Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forget Password?</Text>
      </TouchableOpacity>

      {/* Connect Using */}
      <Text style={styles.orConnectText}>Or connect using</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up */}
      <Text style={styles.signUpText}>
        Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
    </View>
  ) : (
    <HomeScreen username={currentScreen.username} />
  );
};

const HomeScreen = ({ username }: { username: string | null }) => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.greetingText}>Hello, {username || 'Guest'}</Text>
      <Text style={styles.subGreetingText}>What do you want to eat?</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />

      const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

      <View style={styles.categoriesContainer}>
        <View style={styles.category}>
          <Text>🍕</Text>
          <Text style={styles.categoryText}>Lunch</Text>
        </View>
        <View style={styles.category}>
          <Text>🥗</Text>
          <Text style={styles.categoryText}>Dinner</Text>
        </View>
        <View style={styles.category}>
          <Text>🥐</Text>
          <Text style={styles.categoryText}>Breakfast</Text>
        </View>
        <View style={styles.category}>
          <Text>🍦</Text>
          <Text style={styles.categoryText}>Dessert</Text>
        </View>
      </View>

      <View style={styles.specialContainer}>
        <Text style={styles.sectionTitle}>Today's special</Text>
        <View style={styles.specialItemsContainer}>
          <View style={styles.specialItem}>
            <Text style={styles.itemName}>Vegan Chickpea Curry</Text>
            <Text style={styles.itemDesc}>Loaded with protein</Text>
            <Text style={styles.itemPrice}>₹150</Text>
          </View>
          <View style={styles.specialItem}>
            <Text style={styles.itemName}>Carrot Chickpea Salad</Text>
            <Text style={styles.itemDesc}>Carrots lend an earthy note</Text>
            <Text style={styles.itemPrice}>₹250</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#007BFF',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orConnectText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  socialText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  signUpText: {
    fontSize: 14,
    color: '#666',
  },
  signUpLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subGreetingText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  category: {
    alignItems: 'center',
  },
  categoryText: {
    marginTop: 5,
    color: '#666',
  },
  specialContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  specialItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specialItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    width: '48%',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemDesc: {
    fontSize: 12,
    color: '#666',
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
