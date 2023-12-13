import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthProvider } from './App/Context/AuthContext';
import BottomNavigation from './App/Navigation/BottomNavigation';

export default function App() {
  const [userData, setUserData] = useState(null); // State untuk menyimpan informasi otentikasi

  return (
    <View style={styles.container}>
      <AuthProvider value={{ userData, setUserData }}>
        <BottomNavigation />
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
});