// AuthProvider.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();
const apiUrl = "https://hrh-course.up.railway.app";

const ActionTypes = {
  SET_USER: 'SET_USER',
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserData();
  }, []);

  const updateProfile = async (newUserData) => {
    try {
      if (newUserData) {
        // Update AsyncStorage only if newUserData is defined
        await AsyncStorage.setUser('userData', JSON.stringify(newUserData));
  
        // Update State
        setUser(newUserData);
      } else {
        // Handle the case where newUserData is undefined
        console.warn('updateProfile: newUserData is undefined or null. Skipping AsyncStorage update.');
        // You might want to add additional handling here if needed.
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const signIn = async (username, password) => {
    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const resource = await response.json();
  
      console.log('Response from server:', resource.data);
  
      // Simpan token ke AsyncStorage
      await AsyncStorage.setItem('accessToken', resource.data.accessToken);
      setUser(resource.data)
  
      // Panggil fungsi updateProfile untuk menyimpan informasi pengguna di AsyncStorage
    //   updateProfile(resource.data.user);
  
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('userData'); // Hapus juga data pengguna saat logout
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
