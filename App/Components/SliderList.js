import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SliderList = () => {
  const [sliders, setSliders] = useState([]);
  const [numColumns, setNumColumns] = useState(2);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      fetch('https://hrh-course.up.railway.app/slider')
        .then(response => response.json())
        .then(data => setSliders(data))
        .catch(error => console.error('Error fetching sliders:', error));
    }
    fetchData();
  }, []);

  const changeNumColumns = newNumColumns => {
    setNumColumns(newNumColumns);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleProductPress(item)}>
      <Image
        source={{ uri: `https://hrh-course.up.railway.app/slider/course/${item.imageUrl}` }}
        style={styles.image}
      />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleProductPress = (item) => {
    navigation.navigate('CourseDetail', {item});
  };

  return (
    <ScrollView>
      <FlatList
        key={numColumns} // Update key to force re-render
        data={sliders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        horizontal={false}
        pagingEnabled={false}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 16,
  },
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SliderList;