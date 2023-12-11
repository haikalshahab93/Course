import { View, StyleSheet, FlatList, Image, Dimensions, Text } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors';

const data = [
    { id: '1', image: require('../Assets/colors1.png'), name: 'Colors Lessons 1', caption: 'how child see colors' },
    { id: '2', image: require('../Assets/colors2.png'), name: 'Colors Lesson 2', caption: 'understanding colors'  },
    { id: '3', image: require('../Assets/colors3.png'), name: 'Colors Lesson 3', caption: 'activity using colors'  }
]

const LessonCourse = () => {
    const renderItem = ({ item }) => (
        <View style={{margin:10}}>
            <Image source={item.image}
            style={{width:150, height:90, borderRadius:10}} />
            <View style={{paddingTop:10}}>
                <Text style={{fontWeight:'900', fontSize:18}}>{item.name}</Text>
                <Text style={{fontWeight:'300', fontSize:13, color:Colors.grey}}>{item.caption}</Text>
            </View>
        </View>
    );

    return (
        <View style={{elevation:2}}>
            <Text style={{
                fontSize:20,
                fontWeight:'900',
                margin:10,
                marginBottom:3
            }}>
                Colors Lessons
            </Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                // pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default LessonCourse