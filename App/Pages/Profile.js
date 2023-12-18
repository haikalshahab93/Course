import React , {useState} from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../Context/AuthContext';
import styles from '../../src/screens/ProfileScreen/styles';

const Profile = () => {
    const { user, signOut, setUser } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [editedFullName, setEditedFullName] = useState(user?.fullName || '');
    const [editedEmail, setEditedEmail] = useState(user?.email || '');
  
    const handleSaveChanges = () => {
      // Simpan perubahan ke database atau state sesuai kebutuhan
      // Misalnya, jika menggunakan state global seperti Redux atau Context, gunakan setUser
      // jika menggunakan database, kirim perubahan ke sana
      setUser({
        ...user,
        fullName: editedFullName,
        email: editedEmail,
      });
  
      // Keluar dari mode pengeditan
      setIsEditing(false);
    };
  
    const handleCancelEdit = () => {
      // Kembali ke nilai asli saat membatalkan pengeditan
      setEditedFullName(user?.fullName || '');
      setEditedEmail(user?.email || '');
  
      // Keluar dari mode pengeditan
      setIsEditing(false);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../Assets/loginbg.png')}
            style={styles.image} />
        </View>
        {/* <ImageBackground
          source={require('../Assets/profilebg.png')}
          style={styles.backgroundImage}
        > */}
          <View style={styles.profileContainer}>
            <Image
              source={require('../Assets/Profile-pic.png')}
              style={styles.profileImage}
            />
            {isEditing ? (
              <>
                <TextInput
                  style={styles.editInput}
                  placeholder="Full Name"
                  value={editedFullName}
                  onChangeText={(text) => setEditedFullName(text)}
                />
                <TextInput
                  style={styles.editInput}
                  placeholder="Email"
                  value={editedEmail}
                  onChangeText={(text) => setEditedEmail(text)}
                />
              </>
            ) : (
              <>
                <Text style={styles.textName}>{user?.fullName}</Text>
                <Text style={styles.textEmail}>{user?.email}</Text>
              </>
            )}
          </View>
        {/* </ImageBackground> */}
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