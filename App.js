import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import store from './src/store';
import home from './src/screen/home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={home}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen name="home" component={Menu} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
