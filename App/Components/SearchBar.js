import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={{
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#fff',
            padding:10,
            borderRadius:10,
            elevation:2,
            marginTop:10,
            alignItems:'center'
        }}>
            <Ionicons style={{marginRight:10}} name="ios-search-sharp" size={24} color="grey" />
            <TextInput placeholder='Search' />
        </View>
    )
}

export default SearchBar