import 'react-native-gesture-handler';
import React, { FC } from 'react';
import UsersScreen from './src/screens/UsersScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumScreen from './src/screens/AlbumScreen';
import Routes from './src/Routes/Routes';
const Stack = createStackNavigator();

const App: FC<{}> = () => {
  return (
    <Routes />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Users"
    //       component={UsersScreen}
    //       options={{ title: 'Users' }}
    //     />
    //     <Stack.Screen name="Album" component={AlbumScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
