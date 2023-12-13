import React, { useState,useContext } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../src/screens/LoginScreen/styles';
import {useAuth} from '../Context/AuthContext';


export default function LoginScreen({navigation}) {

    const {user,setUser}=useAuth();
    const {signIn} =useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validationMessage, setValidationMessage] = useState('');


    const onFooterLinkPress = () => {
        navigation.navigate('Register')
    }

    const onLoginPress = async () => {
        if (email === '' || password === '') {
          setValidationMessage('Data Tidak Boleh Kosong');
          return;
        }
        try {
            await signIn(email, password);
          } catch (error) {
            setValidationMessage('Email Atau Password Salah !');
          }
        };
       

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
               <Image source={require('../Assets/Login-page.png')} style={{ width:'100%'}}/>
               <Text style={{
                    fontSize:31,
                    textAlign:'center',
                    fontWeight:'bold'}
                }
                >
                    Welcome to HRH Course
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                {validationMessage ? <Text style={{ color: 'red', textAlign:'center' }}>{validationMessage}</Text> : null}
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}