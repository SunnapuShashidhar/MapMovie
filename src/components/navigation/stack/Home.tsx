import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LocationDetailsScreen from '../../../screens/maps/LocationDetails';
import BottomTab from '../bottomtab/BottomTab';


const Stack = createStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator initialRouteName="bottomtab" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="bottomtab" component={BottomTab} />
      <Stack.Screen name="LocationDetails" component={LocationDetailsScreen as unknown as () => React.JSX.Element} />
    </Stack.Navigator>
  )
}

export default Home