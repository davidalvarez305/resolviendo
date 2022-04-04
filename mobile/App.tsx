import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Nav from './src/components/Nav';
import LanguageContext from './src/context/LanguageContext';
import AuthProvider from './src/context/AuthContext';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <LanguageContext>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Nav" component={Nav} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </LanguageContext>
  );
};

export default App;
