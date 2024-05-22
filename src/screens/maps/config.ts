import { MarkerType } from "./types";

const markers:MarkerType[]=[
  {
    coordinate: { latitude: 17.437462, longitude:  78.448288 },
    title: 'Amerpet Metro',
    description: 'Ameerpet Metro Station is a major transit hub in Hyderabad, strategically located at the intersection of the Blue and Red lines of the Hyderabad Metro. Known for its connectivity, it serves as a key interchange point, enabling seamless travel across the city. The station is situated in a bustling commercial area, providing easy access to numerous shopping centers, educational institutions, and corporate offices.',
    shortDescription:"It is a key interchange hub on Hyderabad's Blue and Red metro lines, connecting major commercial and educational areas."
  },
  {
    coordinate: { latitude: 17.4428, longitude: 78.3876 },
    title: 'Durgam cheruvu metro',
    description: "Durgam Cheruvu Metro Station is located near the picturesque Durgam Cheruvu Lake in Hyderabad. Part of the Blue Line, this station offers convenient access to the scenic and recreational areas surrounding the lake. It's an ideal stop for commuters heading to the nearby IT hubs, residential complexes, and leisure destinations, making it a crucial part of the city's public transport network.",
    shortDescription:"It offers access to the scenic Durgam Cheruvu Lake and nearby IT hubs on Hyderabad's Blue Line"
  },
];

export const configJSON={
  markers,
  time:2000,
  initialRegion:{
    latitude: markers[0].coordinate.latitude,
    longitude: markers[0].coordinate.longitude,
    latitudeDelta: 1,
    longitudeDelta: 1,
  },
  goBack:"go Back",
  goToMovies:"Movies"
}