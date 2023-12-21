// BottomNavigation.js
import React, { useContext } from 'react';
import { useAuth } from '../Context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Beranda from '../Pages/Home';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import Register from '../Pages/Registration';
import Course from '../Pages/LessonsDetails';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={user ? 'Beranda' : 'Login'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-sharp';
            } else if (route.name === 'Login' && !user) {
              iconName = 'log-in';
            } else if (route.name === 'Register' && !user) {
              iconName = 'apps';
            } else if (route.name === 'Profile' && user) {
              iconName = 'person';
            } else if (route.name === 'Course' && user) {
              iconName = 'book';
            } else {
              iconName = 'book';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        {/* Tampilkan Beranda bahkan jika pengguna belum login */}
        <Tab.Screen name="Home" component={Beranda} />

        {user ? (
          <>
            <Tab.Screen name="Profile" component={Profile} />
          </>

        ) : (
          <>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
            <Tab.Screen name="Course" component={Course} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;