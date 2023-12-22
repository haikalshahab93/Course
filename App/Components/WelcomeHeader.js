import { useState,useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import React from 'react'
import { useAuth } from '../Context/AuthContext';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


const WelcomeHeader = () => {
    const {user} = useAuth();
    const [photoUrl, setPhotoUrl] = useState(null);
      
        useEffect(() => {
            
            const getProfile = async () => {
                try { 
                  const response = await fetch('https://hrh-course.up.railway.app/profile', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'multipart/form-data'
                    },
                    body: formData,
                  })
              
                  
                  if (response.status === 200) {
                    Alert.alert('Berhasil', 'Slider berhasil dibuat!');
                    setName('');
                    setDescription('');
                    setImage(null);
                  } else {
                    Alert.alert('Error', 'Gagal membuat slider');
                  }
                } catch (error) {
                  console.error('Error creating slider:', error);
                  Alert.alert('Error', 'Gagal membuat slider');
                }
              };


              getProfile()


            
        }, []);

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
        }>
            <View>
                <Text style={{ fontSize: 15 }}>Hello</Text>
                {user ? (
               <Text style={{ fontWeight: 900, fontSize: 25 }}>{user.fullName}</Text>
            ) : (
                <Text style={{ fontWeight: 900, fontSize: 25 }}>Guide</Text>
            )}
                
            </View>
            {user ? (
                <Image source={require('./../Assets/Profile-pic.png')} style={{ width: 50, height: 50, borderRadius: 100, }} />
            ) : (
                <Image source={require('./../Assets/Profile-pic.png')} style={{ width: 50, height: 50, borderRadius: 100, }} />
            )}
        </View>
    )
}

export default WelcomeHeader