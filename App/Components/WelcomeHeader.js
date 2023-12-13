import { View, Text, Image } from 'react-native'
import React from 'react'
import { useAuth } from '../Context/AuthContext';

const WelcomeHeader = () => {
    const { user, setUser } = useAuth();

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