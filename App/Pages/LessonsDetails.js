import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const LessonsDetails = () => {
    return (
        <View style={{padding:20,paddingTop:30}}>
            <Ionicons name="chevron-back" size={24} color="black" />
            <View>
                <Text style={{fontWeight:'900', fontSize:20}}>
                    Lesson Name
                </Text>
            </View>
        </View>
    )
}

export default LessonsDetails