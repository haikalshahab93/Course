import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';

const data = [
    { id: '1', image: require('../Assets/colors1.png'), name: 'Colors Lessons', amount: '8', author: 'Little Academy TV', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
]

const LessonsDetails = () => {
    const lesson = data[0];

    return (
        <View style={{padding:10,paddingTop:30}}>
            <Ionicons style={{marginBottom:20}} name="chevron-back" size={24} color="black" />
            <View>
                <Text style={{fontWeight:'900', fontSize:20}}>
                    {lesson.name}
                </Text>
                <Text style={{color:Colors.grey}}>
                    By {lesson.author}
                </Text>
                <Image source={lesson.image} 
                style={{height:180, width:330, marginTop:10, borderRadius:10}}
                />
                <Text style={{marginTop:10, fontSize:16, fontWeight:700}}>
                    About Course
                </Text>
                <Text numberOfLines={4} style={{color:Colors.grey}}>
                    {lesson.description}
                </Text>
            </View>
        </View>
    )
}

export default LessonsDetails