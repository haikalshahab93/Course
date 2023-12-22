import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../../src/screens/HomeSlider/styles';

const CreateSlider = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImage] = useState(null);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.assets[0].uri)
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };
  
  const createSlider = async () => {
    try {
      if (!name.trim() || !description.trim() || !imageUrl) {
        Alert.alert('Error', 'Mohon isi semua kolom dan pilih gambar.');
        return;
      }
  
      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('description', description.trim());
      formData.append('imageUrl', {
        uri: imageUrl,
        name: 'image.jpg',
        type: 'image/jpg',
      });

      const response = await fetch('https://hrh-course.up.railway.app/slider', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data'
        },
        body: formData,
      })
  
      
      if (response.status === 200) {
        Alert.alert('Berhasil', 'Slider berhasil dibuat!');
        setName('');
        setDescription('');
        setImage(null);
      } else {
        Alert.alert('Error', 'Gagal membuat slider');
      }
    } catch (error) {
      console.error('Error creating slider:', error);
      Alert.alert('Error', 'Gagal membuat slider');
    }
  };

  console.log(imageUrl)
  return (
    <View style={styles.newCourseContainer}>
      <Text style={{ fontSize: 24, fontWeight: '900', marginBottom: 10 }}>
        Add New Course
      </Text>
      <TextInput
        style={{ height: 30, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10, borderRadius: 10 }}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={{ height: 60, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10, borderRadius: 10 }}
        placeholder="Description"
        multiline
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Select Image" onPress={pickImage} color='#55804A'/>
      {imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200, marginVertical: 8 }} />}
      <Text style={{fontSize:5, color: 'white'}}>.</Text>
      <Button title="Create Slider" onPress={createSlider} color='#ED8440' />
    </View>
  );
};

export default CreateSlider;