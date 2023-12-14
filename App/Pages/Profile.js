import React , {useState} from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, Dimensions,TextInput } from 'react-native';
import { useAuth } from '../Context/AuthContext';

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
        <ImageBackground
          source={require('../Assets/slide4.png')}
          style={styles.backgroundImage}
        >
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
                <Text style={styles.text}>Nama: {user?.fullName}</Text>
                <Text style={styles.text}>Email: {user?.email}</Text>
              </>
            )}
          </View>
        </ImageBackground>
        <View style={styles.bottomContainer}>
          {isEditing ? (
            <>
              <Button title="Save Changes" onPress={handleSaveChanges} />
              <Button title="Cancel" onPress={handleCancelEdit} />
            </>
          ) : (
            <>
              <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
              <Button title="Logout" onPress={signOut} />
            </>
          )}
        </View>
      </View>
    );
  };

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
    width: width - 40,
  },
  profileImage: {
    width: width / 4,
    height: width / 4,
    borderRadius: (width / 4) / 2,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  bottomContainer: {
    marginTop: 20,
    width: width - 40,
  },
});

export default Profile;