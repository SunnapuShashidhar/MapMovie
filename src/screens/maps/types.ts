import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface MarkerType {
  coordinate:{
    latitude: number;
     longitude: number;
  },
  title:string,
  description:string,
  shortDescription:string
}

export type RootStackParamList = {
  Home: undefined; 
  LocationDetails: { marker: MarkerType }; 
}

export interface HomeScreenNavigationProp extends StackNavigationProp<RootStackParamList, 'Home'> {}
export interface LocationDetailsRouteProp extends RouteProp<RootStackParamList, 'LocationDetails'> {}

export interface MapProps {
  navigation: HomeScreenNavigationProp;
}

export interface LocationDetailsProps{ 
  route: {
    params:{
      marker:{
        title:string,
        description:string
      }
    }
} 
}