import React from 'react';
import { View, Text } from 'react-native';
import SliderList from '../Components/SliderList';
import CreateSlider from '../Components/CreateSlider';

const HomeSlider = () => {
  return (
    <View>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Create New Slider</Text>
      <CreateSlider />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Slider List</Text>
      <SliderList />
      
    </View>
  );
};

export default HomeSlider;