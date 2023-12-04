import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import library untuk ikon
import Screen1 from '../Pages/Home';
import Screen2 from '../Pages/Login';
import Screen3 from '../Pages/Home';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Depan') {
              iconName = 'ios-home';
            } else if (route.name === 'Login') {
              iconName = 'ios-person';
            } else if (route.name === 'Kosong') {
              iconName = 'ios-settings';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Depan" component={Screen1} />
        <Tab.Screen name="Login" component={Screen2} />
        <Tab.Screen name="Kosong" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;