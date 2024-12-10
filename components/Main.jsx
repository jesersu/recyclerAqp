import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { getLatestMovies } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedMovieCard, MovieCard } from './MovieCard';
import { FlatList } from 'react-native-web';
import { Logo } from './Logo';
import { Link } from 'expo-router';

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
    <View style={{flex: 1 , paddingTop:insets.top, paddingBottom:insets.bottom}}>
        <View style={{marginBottom: 20}}>
            <Logo />
        </View>
        <Link href="/about" className='text-blue-400'>Concenos</Link>

        {movies.length === 0 ? (
            <ActivityIndicator color={"red"} size={"large"}/>
        ): (
            <FlatList 
                data={movies}
                renderItem={({item, index}) => <AnimatedMovieCard movie={item} index={index}/>}

            />
        )}
   
    </View>
  );
}

