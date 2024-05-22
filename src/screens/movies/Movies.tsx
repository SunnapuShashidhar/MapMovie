import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { Movie } from './types';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';



const MoviesScreen = () => {
  const [movies, setMovies] = useState<Movie[] | null>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/movies');
        setMovies(response.data);
      } catch (error) {
        setMovies(null)
      }
    };
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={movies}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              {/* as the image url are not displaying image even I tryed to image in brower but I unable to see. So, I can't display image */}
              {/* <Image source={{ uri: item.imdb_url + item.image }} style={{ height: 100, width: 100 }} /> */}
              <Text style={styles.title}>{item.movie}</Text>
              <Text style={styles.rating}>Rating: {item.rating}</Text>
            </View>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveFontSize(2),
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
  }
});

export default MoviesScreen;
