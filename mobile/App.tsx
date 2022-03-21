import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nav from './src/components/Nav';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Nav" component={Nav} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;