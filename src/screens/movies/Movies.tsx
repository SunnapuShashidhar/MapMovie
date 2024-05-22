import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Movie } from './types';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { configJSON } from './config';
import { AuthContext } from '../../context/AuthContext';



const MoviesScreen = () => {
  const [movies, setMovies] = useState<Movie[] | null>([]);
  const { signOut } = useContext(AuthContext)!;
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(configJSON.url);
        setMovies(response.data);
      } catch (error) {
        setMovies(null)
      }
    };
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>{configJSON.movieList}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={movies}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              {/* as the image url are not displaying image even I tryed to image in brower but I unable to see. So, I can't display image */}
              {/* <Image source={{ uri: item.imdb_url + item.image }} style={{ height: 100, width: 100 }} /> */}
              <Text style={styles.title}>{item.movie}</Text>
              <Text style={styles.rating}>{configJSON.rating}{item.rating}</Text>
            </View>
          )
        }}
      />
      <TouchableOpacity style={styles.signoutButton} onPress={signOut}>
        <Text style={styles.signOutText}>{configJSON.signOut}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveFontSize(2),
    rowGap: responsiveHeight(2),
    justifyContent: "space-between"
  },
  item: {
    padding: responsiveFontSize(1.5),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontWeight: "700",
    color: "#000"
  },
  rating: {
    fontSize: responsiveFontSize(1.4),
    fontWeight: "500"
  },
  headline: {
    fontSize: responsiveFontSize(3),
    fontWeight: "900",
    color: "#000",
  },
  signoutButton: {
    backgroundColor: "#FFA62F",
    width: "100%",
    padding: responsiveFontSize(.4),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: responsiveFontSize(1.4),
    paddingVertical: responsiveHeight(1.5)
  },
  signOutText: {
    color: "#fff",
    fontSize: responsiveFontSize(2.5),
    fontWeight: "700",
    textTransform: "capitalize",
  }
});

export default MoviesScreen;
