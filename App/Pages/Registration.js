import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../src/screens/RegistrationScreen/styles';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection } from "firebase/firestore"

export default function Registration({ navigation }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = async () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        await createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                // Signed in 
                
                const uid = response.user.uid
                const user = response.user;

                const data = {
                    id: uid,
                    email,
                    fullName,
                    hashedPassword,
                    createdAt: new Date().toUTCString()
                };
                const useRef = collection(db, "users");
                setDoc(doc(useRef, uid), data)
                    .then(() =>navigation.navigate('Login', { user: data })
                    )
                    .catch((error) => {
                        console.log(error)
                    });
            })
            .catch((error) => {
                alert(error)
            });
    }

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