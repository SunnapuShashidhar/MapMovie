import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import Home from './src/components/navigation/stack/Home';
import Authentication from './src/components/navigation/stack/Authentication';


const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthContext.Consumer>
          {
            (props) => props?.isSignedIn ? <Home /> : <Authentication />
          }
        </AuthContext.Consumer>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
