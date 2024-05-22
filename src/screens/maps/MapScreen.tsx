import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { MapProps, MarkerType } from './types';
import { configJSON } from './config';


const MapScreen = () => {
  const navigation = useNavigation<MapProps['navigation']>();

  const handleMarkerPress = (marker: MarkerType) => {
    setTimeout(() => {
      navigation.navigate('LocationDetails', { marker });
    }, configJSON.time);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={configJSON.initialRegion}
        provider='google'
      >
        {configJSON.markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.shortDescription}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
