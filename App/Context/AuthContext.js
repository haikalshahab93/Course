// AuthProvider.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();
const apiUrl = "https://hrh-course.up.railway.app";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  

  const getProfile = async () => {
    try {
      // Mendapatkan token dari AsyncStorage
      const token = await AsyncStorage.getItem('accessToken');
      const profileRequestId = user.userId
      
      // Mendapatkan data profil dari endpoint
      const response = await fetch(`${apiUrl}/profile/${profileRequestId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

    //   console.log(response,'test')

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Mendapatkan data profil dari respons API
      const profileData = await response.json();

      // Menyimpan data profil ke dalam state
      setProfile(profileData);
    } catch (error) {
      console.error('Error loading profile data:', error);
    }
  };


  useEffect(() => {
    getProfile()

    const loadUserData = async () => {
      try {

        // Mengambil data pengguna dari AsyncStorage
        const userDataString = await AsyncStorage.getItem('userData');
        
        // Jika data pengguna ditemukan, parse dari JSON ke objek
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          // Set data pengguna ke dalam state
          await AsyncStorage.setItem('userProfile', JSON.stringify(userData));
          setUser(userData);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    // Memanggil fungsi untuk memuat data pengguna saat komponen dimount
    loadUserData();
  }, []);

  const updateProfile = async (newUserData) => {
    try {
      if (newUserData) {
        // Mendapatkan token dari AsyncStorage
        const token = await AsyncStorage.getItem('accessToken');
        console.log(token,'tokenya ini')
  
        // Melakukan fetch untuk mendapatkan data profil
        const response = await fetch(`${apiUrl}/profile/${newUserData.userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status}`);
        }
  
        // Mendapatkan data profil dari respons API
        const profileData = await response.json();

        console.log(profileData)
  
        // Menyimpan data pengguna dan profil ke AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(newUserData));
        await AsyncStorage.setItem('userProfile', JSON.stringify(profileData));

      } else {
        // Handle jika data pengguna baru undefined atau null
        console.warn('updateProfile: newUserData is undefined or null. Skipping AsyncStorage update.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const signIn = async (username, password) => {
    try {
      // Lakukan panggilan API atau proses otentikasi sesuai kebutuhan
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Ambil data dari respons API
      const resource = await response.json();

      // Simpan token ke AsyncStorage (jika diperlukan)
      await AsyncStorage.setItem('accessToken', resource.data.accessToken);
      await AsyncStorage.setItem('userId', JSON.stringify(resource.data.userId));

      setUser(resource.data)
   
    //   console.log(user)

      // Panggil fungsi updateProfile untuk menyimpan informasi pengguna di AsyncStorage
        // updateProfile(resource.data);

    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const signOut = async () => {
    try {
      // Hapus token dan data pengguna dari AsyncStorage saat logout
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('userData');
      await AsyncStorage.removeItem('userProfile');
      // Set state user menjadi null
      setUser(null);
      setProfile(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Memberikan state user dan fungsi-fungsi otentikasi ke komponen anak
  return (
    <AuthContext.Provider value={{ user, signIn, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk digunakan oleh komponen anak untuk mengakses state user dan fungsi otentikasi
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Ekspor AuthProvider dan useAuth untuk digunakan oleh komponen lainnya
export { AuthProvider, useAuth };