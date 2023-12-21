import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CreateSlider = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImage] = useState(null);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.imageUrl,
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
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      console.log(response.status)
  
      if (response) {
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
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
        Create Slider
      </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 8 }}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={{ height: 80, borderColor: 'gray', borderWidth: 1, marginBottom: 8 }}
        placeholder="Description"
        multiline
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Select Image" onPress={pickImage} />
      {imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200, marginVertical: 8 }} />}
      <Button title="Create Slider" onPress={createSlider} />
    </View>
  );
};

export default CreateSlider;