import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../src/screens/RegistrationScreen/styles';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection } from "firebase/firestore"
import * as Crypto from 'expo-crypto';


const Registration = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const onFooterLinkPress = () => {
      navigation.navigate('Login');
    };
  

    const hashPassword = async (password) => {
        try {
          const hashedPassword = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            password
          );
          return hashedPassword;
        } catch (error) {
          console.error('Error hashing password:', error.message);
          throw error;
        }
      };
      
    const onRegisterPress = async () => {
      if (password !== confirmPassword) {
        Alert.alert("Passwords don't match.");
        return;
      }
  
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const uid = response.user.uid;
        const hashedPassword = await hashPassword(password);
  
        const userData = {
          id: uid,
          email,
          fullName,
          password: hashedPassword,
          createdAt: new Date().toUTCString(),
        };
  
        const usersRef = collection(db, 'users');
        await setDoc(doc(usersRef, uid), userData);
  
        navigation.navigate('Beranda',{user:userData});

      } catch (error) {
        console.error('Registration failed:', error.message);
        Alert.alert('Registration failed. Please try again.');
      }
    };

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                {/* <Image
                    style={styles.logo}
                    source={require('../../assets/icon.png')}
                /> */}
                <Text style={{
                    fontSize: 68,
                    textAlign:'center',
                    fontWeight:'700'}
                }
                >
                    Sign up
                </Text>
                <Text style={{
                    fontSize: 16,
                    marginBottom: 30,
                    textAlign:'center',
                    fontWeight:'400'}
                }>
                    Create account
                </Text>
                <View style={styles.inputContainer}>
                    <Text style={{
                    fontSize: 16,
                    fontWeight:'600'}
                    }
                    >
                        Full Name
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Full Name'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setFullName(text)}
                        value={fullName}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <Text style={{
                    fontSize: 16,
                    fontWeight:'600'}
                    }
                    >
                        Email
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter E-mail'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <Text style={{
                    fontSize: 16,
                    fontWeight:'600'}
                    }
                    >
                        Password
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='Enter Password'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <Text style={{
                    fontSize: 16,
                    fontWeight:'600'}
                    }
                    >
                        Re-Enter Password
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder='Confirm Password'
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onRegisterPress()}>
                        <Text style={styles.buttonTitle}>Create account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Login Here</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

export default Registration;