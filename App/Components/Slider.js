import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { auth, db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';  // Updated import statements
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const storage = getStorage();
        const sliderCollection = collection(db, 'sliders');
        const sliderSnapshot = await getDocs(sliderCollection);

        const data = await Promise.all(sliderSnapshot.docs.map(async (doc) => {
          // Asumsikan setiap dokumen memiliki properti imageRef dan otherData
          const { id, imageUrl, name } = doc.data();
          console.log(name);
          // Gunakan imageRef sebagai child reference ke root storage
          const imageStorageRef = ref(storage, imageUrl);


          // Dapatkan URL unduhan dari Firebase Storage
          const imageUrlData = await getDownloadURL(imageStorageRef);

          return {
            id: doc.id,
            imageUrlData,
            name,
          };
        }));

        setSliderData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={{ marginTop: 5 }}>
        <Image
          source={{ uri: item.imageUrlData }}
          style={{ width: Dimensions.get('screen').width * 0.9, height: 400 }}
        />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const handlePress = (item) => {
    console.log('Item Pressed:', item);
    // Implement the desired functionality when an item is pressed
  };

  return (
    <View>
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