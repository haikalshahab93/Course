import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png' )} // Gantilah dengan path/logo Anda
          style={styles.logo}
        />
        <Text style={styles.title}>Selamat Datang HRH Course  </Text>
        {/* Tambahkan komponen atau konten lain sesuai kebutuhan */}
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    logo: {
      width: 300,
      height: 100,
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });

export default Home