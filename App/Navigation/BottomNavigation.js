import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import library untuk ikon
import Screen1 from '../Pages/Home_';
import Screen2 from '../Pages/Login__';
import Screen3 from '../Pages/Home_';
import Screen4 from '../Pages/Home1';

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
            } else if (route.name === 'Course') {
              iconName = 'ios-school';
            } else if (route.name === 'Leaderboard') {
              iconName = 'ios-stats-chart';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          // Additional tabBarStyle or other options can be added here
        })}
      >
        <Tab.Screen name="Depan" component={Screen1} />
        <Tab.Screen name="Login" component={Screen2} />
        <Tab.Screen name="Course" component={Screen3} />
        <Tab.Screen name="Leaderboard" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;