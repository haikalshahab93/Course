import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../Context/AuthContext';
import styles from '../../src/screens/ProfileScreen/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const { user, signOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);


  const [profile, setUserProfile] = useState([]);


  const [firstName, setFirstname] = useState('');
  const [lastName, setLasname] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        // Mendapatkan token dari penyimpanan lokal (Anda bisa menggunakan AsyncStorage di Expo)
        const token =  await AsyncStorage.getItem('accessToken');
        // Membuat permintaan HTTP dengan token di header
        const response = await fetch(`https://hrh-course.up.railway.app/profile/}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Mendapatkan data dari respons JSON
        const responseData = await response.json();
        console.log(responseData)
        // Menyimpan data ke state
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, []); // Pastikan Anda mengganti dependensi useEffect sesuai kebutuhan



  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.photo,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setPhoto(result.assets[0].uri)
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };


  const handleSaveChanges = async () => {

    try {
      const formData = new FormData();
      formData.append('firstName', firstName.trim());
      formData.append('lastName', lastName.trim());
      formData.append('phone', phone.trim());
      formData.append('photo', {
        uri: photo,
        name: 'image.jpg',
        type: 'image/jpg',
      });

      const response = await fetch(`https://hrh-course.up.railway.app/profile/${userProfile.id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      console.log(response)

      if (response) {
        Alert.alert('Berhasil', 'Profile berhasil dibuat!');
        // setFirstname('');
        // setLasname('');
        // setImage(null);
      } else {
        Alert.alert('Error', 'Gagal membuat slider');
      }
    } catch (error) {
      console.error('Error creating slider:', error);
      Alert.alert('Error', 'Gagal membuat slider');
    }


    // setUserProfile({
    //   ...userProfile,
    //   firstName: editedFullName,
    //   lastName: editedFullName,
    //   // Sesuaikan dengan atribut yang sebenarnya di profil Anda
    // });

    // Keluar dari mode pengeditan
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    // Kembali ke nilai asli saat membatalkan pengeditan
    setFirstname(firstName || '');
    setLasname(lastName || '');
    setPhone(phone || '');
    setPhoto(photo || '');

    // Keluar dari mode pengeditan
    setIsEditing(false);
  };

console.log(profile)
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../Assets/profilebg.png')}
          style={styles.image} />
      </View>
      <View style={styles.profileContainer}>

        {isEditing ? (
          <>
            <Image source={{ uri: photo }} style={styles.photo} />
            <Button title="Select Image" onPress={pickImage} />
            <TextInput
              style={styles.editInput}
              placeholder="First Name"
              value={firstName}
              onChangeText={(text) => setFirstname(text)}
            />

            <TextInput
              style={styles.editInput}
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => setLasname(text)}
            />

            <TextInput
              style={styles.editInput}
              placeholder="Phone"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />

          </>
        ) : (
          <>
            <Image source={require('../Assets/colors1.png')} style={{ width: 150, height: 150, marginVertical: 8, borderRadius: 60 }} />
            <Text style={styles.textName}>{firstName} {lastName}</Text>
            <Text style={styles.textEmail}>{phone}</Text>
          </>
        )}
      </View>

      <View style={styles.bottomContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSaveChanges}
            >
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={handleCancelEdit}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={[styles.button, styles.editButton]}
              onPress={() => setIsEditing(true)}
            >
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.logoutButton]}
              onPress={signOut}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Profile;