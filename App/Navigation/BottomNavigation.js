// BottomNavigation.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Beranda from '../Pages/Home';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import Register from '../Pages/Registration';
import { useAuth } from '../Context/AuthContext';

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

            if (route.name === 'Beranda') {
              iconName = 'ios-home';
            } else if (route.name === 'Login' && !user) {
              iconName = 'log-in';
            } else if (route.name === 'Register' && !user) {
              iconName = 'ios-book';
            } else if (route.name === 'Profile' && user) {
              iconName = 'person';
            } else {
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
        {user ? (
          <Tab.Screen name="Beranda" component={Beranda} />
        ) : (
          <Tab.Screen name="Login" component={Login} />
        )}
        {!user && <Tab.Screen name="Register" component={Register} />}
        {user && <Tab.Screen name="Profile" component={Profile} />}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;