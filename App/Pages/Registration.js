import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../../src/screens/RegistrationScreen/styles';


const Registration = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onRegisterPress = async () => {
        try {
          if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match');
            return;
          }
    
          // Kirim permintaan registrasi ke backend menggunakan fetch
          const response = await fetch('https://hrh-course.up.railway.app/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              fullName,
              email,
              password,
            }),
          });
    
          const responseData = await response.json();
    
          if (response && responseData.message === 'Registration successful') {
            alert('Account created successfully!');
            navigation.navigate('Login');
          } else {
            alert(responseData.message);
          }
        } catch (error) {
          console.error('Error creating account:', error.message);
          alert('Failed to create account. Please try again.');
        }
      };

    const onFooterLinkPress = () => {
        // Navigasi ke halaman login
        navigation.navigate('Login');
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
                    fontSize: 48,
                    textAlign: 'center',
                    fontWeight: '700'
                }
                }
                >
                    Sign up
                </Text>
                <Text style={{
                    fontSize: 16,
                    marginBottom: 30,
                    textAlign: 'center',
                    fontWeight: '400'
                }
                }>
                    Create account
                </Text>
                <View style={styles.inputContainer}>

                    <Text style={{
                        fontSize: 16,
                        fontWeight: '600'
                    }
                    }
                    >
                        UserName
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
                        fontWeight: '600'
                    }
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
                        fontWeight: '600'
                    }
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
                        fontWeight: '600'
                    }
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
                        fontWeight: '600'
                    }
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