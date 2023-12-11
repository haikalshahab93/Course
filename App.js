import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login__';
import Home from './App/Pages/Home_';
import LessonsDetails from './App/Pages/LessonsDetails';

const App = () => {
  return (
    <View style={{padding:20}}>
      <LessonsDetails/>
      {/* 
      <Home/> 
      <Login/> 
      */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App
