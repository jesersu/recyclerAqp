import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, View, ActivityIndicator, Pressable } from 'react-native';
import { getLatestMovies } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedMovieCard, MovieCard } from './MovieCard';
import { FlatList } from 'react-native-web';
import { Logo } from './Logo';
import { Link } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { CircleInfoIcon } from './Icons';
import { Screen } from './Screen';

export function Main() {
  const [movies, setMovies] = useState([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getLatestMovies().then((movies) => {
      console.log("image url", movies[0].image);
      setMovies(movies);
    });
  }, []);

  return (
    <Screen>
        {movies.length === 0 ? (
            <ActivityIndicator color={"red"} size={"large"}/>
        ): (
            <FlatList 
                data={movies}
                renderItem={({item, index}) => <AnimatedMovieCard movie={item} index={index}/>}

            />
        )}
   
    </Screen>
  );
}

