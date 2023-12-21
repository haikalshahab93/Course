import React, { useState,useContext } from 'react'
import {Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../src/screens/LoginScreen/styles';
import {useAuth} from '../Context/AuthContext';


export default function LoginScreen() {
    
    const {signIn} =useAuth();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validationMessage, setValidationMessage] = useState('');


    const onFooterLinkPress = () => {
        navigation.navigate('Register')
    }

    const onLoginPress = async () => {
        if (username === '' || password === '') {
          setValidationMessage('Data Tidak Boleh Kosong');
          return;
        }
        try {
            await signIn(username, password);
          } catch (error) {
            setValidationMessage('Username Atau Password Salah !');
          }
        };
       

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Text style={{
                    fontSize: 68,
                    textAlign:'center',
                    fontWeight:'700'}
                }
                >
                    Login
                </Text>
                <Text style={{
                    fontSize: 16,
                    marginBottom: 30,
                    textAlign:'center',
                    fontWeight:'400'}
                }>
                    Welcome to HRH Course
                </Text>
                <View
                    style={styles.inputContainer}>
                    <Text style={{
                    fontSize: 16,
                    fontWeight:'600'}
                    }
                    >
                        Username
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Username'
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
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
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onLoginPress()}>
                        <Text style={styles.buttonTitle}>Login</Text>
                    </TouchableOpacity>
                    {validationMessage ? <Text style={{ color: 'red', textAlign:'center' }}>{validationMessage}</Text> : null}                    
                </View>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Signup Here</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

