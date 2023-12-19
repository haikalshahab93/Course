import { useState,useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import React from 'react'
import { useAuth } from '../Context/AuthContext';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


const WelcomeHeader = () => {
    const {user} = useAuth();
    const [photoUrl, setPhotoUrl] = useState(null);
      
        useEffect(() => {
          const fetchPhoto = async () => {
            try {
              const storage = getStorage();
              const photoRef = ref(storage,`profile/${user.photo}`);
              const url = await getDownloadURL(photoRef);
              setPhotoUrl(url);
            } catch (error) {
              console.error('Error fetching photo:', error.message);
            }
          };
      
          fetchPhoto();
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
                <Text style={{ fontSize: 15 }}>Hello!</Text>
                {user ? (
               <Text style={{ fontWeight: 900, fontSize: 25 }}>{user.fullName}</Text>
            ) : (
                <Text style={{ fontWeight: 900, fontSize: 25 }}>Guest</Text>
            )}
                
            </View>
            {user ? (
                <Image source={{uri:photoUrl}} style={{ width: 50, height: 50, borderRadius: 100, }} />
            ) : (
                <Image source={require('./../Assets/Profile-pic.png')} style={{ width: 50, height: 50, borderRadius: 100, }} />
            )}
        </View>
    )
}

export default WelcomeHeader