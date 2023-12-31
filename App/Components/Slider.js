import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {

    const fetchData = async () => {
      fetch('https://hrh-course.up.railway.app/slider')
        .then(response => response.json())
        .then(data => setSliderData(data))
        .catch(error => console.error('Error fetching sliders:', error));
    }

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={{ marginTop: 5 }}>
        <Image
           source={{ uri: `https://hrh-course.up.railway.app/slider/course/${item.imageUrl}` }}
          style={{ width: Dimensions.get('screen').width * 0.9, height: 200, borderRadius: 10 }}
        />
        <Text style={{
          marginLeft: 10, marginTop: 10
        }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const handlePress = (item) => {
    // Implement the desired functionality when an item is pressed
    navigation.navigate('CourseDetail', {item});
  };

  return (
    <View 
        style={{
            marginTop: 10,
            paddingTop: 10,
            paddingBottom: 20,
            backgroundColor: '#8ACFFB',
            borderRadius: 20,
        }}>
      <Text style={{
                fontSize:24,
                fontWeight:'900',
                marginLeft:10,
                marginBottom:5
            }}> 
        New Courses!
      </Text>
      <FlatList
        data={sliderData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Slider;