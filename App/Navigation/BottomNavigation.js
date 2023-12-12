// BottomNavigation.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Beranda from '../Pages/Home';
import Login from '../Pages/Login';
import Screen4 from '../Pages/LessonsDetails';
import Register from '../Pages/Registration';
import { AuthContext } from '../Context/AuthContext'; // Sesuaikan dengan konteks autentikasi Anda

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { userData } = useContext(AuthContext); // Pastikan userData memberikan informasi tentang status login

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Beranda') {
              iconName = 'ios-home';
            } else if (route.name === 'Login' && !userData) {
              // Hanya tampilkan "Login" jika belum login
              iconName = 'log-in';
            } else if (route.name === 'Kosong') {
              iconName = 'ios-book';
            } else if (route.name === 'Detail') {
              iconName = 'ios-book';
            } else if (route.name === 'Register' && !userData) {
              // Hanya tampilkan "Register" jika belum login
              iconName = 'ios-book';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#EEBD3C',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Beranda" component={Beranda} />
        {(!userData && (
          <>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
          </>
        ))}
        <Tab.Screen name="Kosong" component={Login} />
        <Tab.Screen name="Detail" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
