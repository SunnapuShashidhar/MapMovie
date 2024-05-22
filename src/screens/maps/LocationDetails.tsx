import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LocationDetailsProps } from './types';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { configJSON } from './config';

const LocationDetailsScreen = ({ route }: LocationDetailsProps) => {
  const { marker } = route.params;
  const navigation = useNavigation()
  const goBack = () => {
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{marker.title}</Text>
      <Text style={styles.description}>{marker.description}</Text>
      <TouchableOpacity style={styles.goBackButton} onPress={goBack} >
        <Text style={styles.goBackText}>{configJSON.goBack}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: responsiveFontSize(1.5),
    paddingTop: responsiveHeight(4)
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(4),
    textAlign: "left",
    color: "#000"
  },
  description: {
    fontSize: responsiveFontSize(1.9),
    color: "#000000",
    lineHeight: responsiveFontSize(2.7),
    textAlign: "justify"
  },
  goBackText: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    fontWeight: "700",
    textTransform: "capitalize",
  },
  goBackButton: {
    padding: responsiveFontSize(1),
    backgroundColor: "#003285",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
    marginTop: responsiveHeight(5),
    borderRadius: responsiveFontSize(1.4)
  },
});

export default LocationDetailsScreen;
