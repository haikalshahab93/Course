import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Lesson2 = ({ route }) => {
  const { itemId, itemName } = route.params;

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const navigation = useNavigation();

  const handleButtonPress = () => {
    // Aksi yang dijalankan saat tombol ditekan
  };

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <Image source={require('../Assets/color1.png')} style={styles.image} />
      <Text style={styles.title}>{itemName}</Text>
      {/* Informasi atau komponen lainnya */}
      <TouchableOpacity onPress={() => handleButtonPress()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Tombol Aksi</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F8FC',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Lesson2;