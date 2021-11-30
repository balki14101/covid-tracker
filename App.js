import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/store';
import splashscreen from './src/screen/splashscreen';
import home from './src/screen/home';
import countrystats from './src/screen/countrystats';

const Stack = createStackNavigator();

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="splashscreen"
              component={splashscreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="home"
              component={home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="countrystats"
              component={countrystats}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
