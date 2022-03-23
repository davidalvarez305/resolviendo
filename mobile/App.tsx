import React, {createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Nav from './src/components/Nav';
import LanguageContext from './src/context/LanguageContext';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <LanguageContext>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Nav" component={Nav} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageContext>
  );
};

export default App;
