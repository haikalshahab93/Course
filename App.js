import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './App/Pages/Home';
import Login from './App/Pages/Login';
import { AuthContext } from './App/Context/AuthContext';
import BottomNavigation from './App/Navigation/BottomNavigation';

export default function App() {

  const [userData, setUserData] = useState();

  return (
    <View style={styles.container}>
      <AuthContext.Provider
        value={{ userData, setUserData }}>
        {userData ?
          <NavigationContainer>
            <Login />
          </NavigationContainer>
          : <BottomNavigation />}
      </AuthContext.Provider>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',

  },
});
