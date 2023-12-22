import { View, StyleSheet, FlatList, Image, Dimensions, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const data = [
    { id: '1', image: require('../Assets/learncolors.png'), name: 'Colors Lessons', amount: '8' },
    { id: '2', image: require('../Assets/learnshapes.png'), name: 'Shapes Lessons', amount: '8'  },
    { id: '3', image: require('../Assets/nouns1.png'), name: 'Nouns Lessons', amount: '7'  }
]

const VideoCourseList = () => {
    const renderItem = ({ item }) => (
        <View>
            <Image source={item.image}
            style={{width:300*1.26, height:200, borderRadius:10}} />
            <View style={{paddingTop:10}}>
                <Text style={{fontWeight:'900', fontSize:18, marginLeft: 10}}>{item.name}</Text>
                <Text style={{fontWeight:'300', fontSize:13, marginLeft: 10}}>{item.amount} Lessons</Text>
            </View>
        </View>
    );

    return (
        <View 
        style={{
            marginTop: 10,
            paddingTop: 10,
            paddingBottom: 20,
            backgroundColor: '#F5CF46',
            borderRadius: 20,
        }}>
            <Text style={{
                fontSize:24,
                fontWeight:'900',
                marginLeft:10,
                marginBottom:5
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