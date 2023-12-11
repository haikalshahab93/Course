import { View, StyleSheet, FlatList, Image, Dimensions, Text } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors';
import { AntDesign } from '@expo/vector-icons';

const data = [
    { id: '1', image: require('../Assets/colors1.png'), name: 'Colors Lessons', amount: '8' },
    { id: '2', image: require('../Assets/shapes1.png'), name: 'Shapes Lessons', amount: '8'  },
    { id: '3', image: require('../Assets/nouns1.png'), name: 'Nouns Lessons', amount: '7'  }
]

const VideoCourseList = () => {
    const renderItem = ({ item }) => (
        <View style={{margin:10}}>
            <Image source={item.image}
            style={{width:300*1.17, height:150, borderRadius:10}} />
            <View style={{paddingTop:10}}>
                <Text style={{fontWeight:'900', fontSize:18}}>{item.name}</Text>
                <Text style={{fontWeight:'300', fontSize:13, color:Colors.grey}}>{item.amount} Lessons</Text>
            </View>
        </View>
    );

    return (
        <View>
            <Text style={{
                fontSize:20,
                fontWeight:'900',
                margin:10,
                marginBottom:3
            }}>
                Recommended for you
            </Text>
            
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default VideoCourseList