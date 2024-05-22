import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../../../screens/maps/MapScreen';
import MoviesScreen from '../../../screens/movies/Movies';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"//
import { responsiveFontSize } from 'react-native-responsive-dimensions';
const Tab = createBottomTabNavigator();

const BottomTab = () => {

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name='Map' component={MapScreen}
        options={{
          tabBarIcon: ({ focused }) => <FontAwesome6
            name={'map-location'}
            size={responsiveFontSize(2.8)}
            color={focused ? "#003285" : "#000"}
          />
        }}
      />
      <Tab.Screen name="Movies" component={MoviesScreen}
        options={{
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons
            name={'movie-roll'}
            size={responsiveFontSize(2.8)}
            color={focused ? "#003285" : "#000"}
          />
        }}
      />
    </Tab.Navigator>
  )
}
export default BottomTab;