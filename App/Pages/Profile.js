import React , {useState} from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, Dimensions,TextInput } from 'react-native';
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
            source={require('../Assets/profilebg.png')}
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
              <Button style={styles.button} title="Save Changes" onPress={handleSaveChanges} />
              <Button style={styles.button} title="Cancel" onPress={handleCancelEdit} />
            </>
          ) : (
            <>
              <Button style={styles.button} title="Edit Profile" onPress={() => setIsEditing(true)} />
              <Button style={styles.button} title="Logout" onPress={signOut} />
            </>
          )}
        </View>
      </View>
    );
  };

export default Profile;