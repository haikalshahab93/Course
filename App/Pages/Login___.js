import { View, Text, Image} from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'
import { AntDesign } from '@expo/vector-icons';

const Login = () => {
    return (
        <View style={{margin:15}}>
            <Image source={require('./../Assets/Login-page.png')} style={{ width:'100%'}}/>
            <View style={{
                paddingTop:40,
                marginTop:-25,
                backgroundColor:'fff',
                borderTopRightRadius:30,
                borderTopLeftRadius:30,}
            }>
                <Text style={{
                    fontSize:35,
                    textAlign:'center',
                    fontWeight:'bold'}
                }
                >
                    Welcome to HRH Course
                </Text>
                <Text style={{
                    fontSize:20,
                    textAlign:'center',
                    marginTop:40}
                }
                >
                    Login/Signup
                </Text>
                <View style={{
                    backgroundColor:Colors.primary,
                    padding:10,
                    margin:30,
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:10}
                }>
                    <AntDesign 
                        name="google"
                        size={30}
                        color="black"  
                    />
                    <Text style={{
                        fontSize:18,
                        fontWeight:'900',
                        marginLeft:10,
                        textAlign:'center'}
                    }>
                        Sign in With Google
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login
