import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import BerandaScreen from '../screens/BerandaScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AkunScreen from '../screens/AkunScreen';

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

const AppStack = createBottomTabNavigator(
  {
    Beranda: BerandaScreen,
    Akun: AkunScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
);

const AppNavigator = createStackNavigator(
  {
    Main: AppStack,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);