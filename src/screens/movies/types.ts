import { ImageSourcePropType } from "react-native";


export interface Movie{
  id: number;
  image: string;
  imdb_url: ImageSourcePropType;
  movie: string;
  rating: number;
}
