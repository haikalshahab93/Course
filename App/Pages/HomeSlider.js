import React from 'react';
import { View, Text } from 'react-native';
import SliderList from '../Components/SliderList';
import CreateSlider from '../Components/CreateSlider';
import styles from '../../src/screens/HomeSlider/styles';

const HomeSlider = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36, fontWeight: 'bold', paddingBottom: 10 }}>Create Course</Text>
      <CreateSlider />
      <Text style={{ fontSize: 36, fontWeight: 'bold', paddingTop: 10 }}>Course List</Text>
      <SliderList />
    </View>
  );
};

export default HomeSlider;