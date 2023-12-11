import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'

const data = [
    { id: '1', image: require('../Assets/slide1.png') },
    { id: '2', image: require('../Assets/slide2.png') },
    { id: '3', image: require('../Assets/slide3.png') },
    { id: '4', image: require('../Assets/slide4.png') }
]

const Slider = () => {
    const renderItem = ({ item }) => (
        <View style={{marginTop:5}}>
            <Image source={item.image}
            style={{width:Dimensions.get('screen').width*0.9, height:400,}}/>
        </View>
    );

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};


export default Slider