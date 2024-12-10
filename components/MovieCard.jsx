import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { Score } from './Score';
export function MovieCard({movie}){
    return (
        <View 
            className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
            key={movie.id} >
            <Image
                source={{ uri: movie.image }}
                style={styles.image} />
            <View>
              <Text className="mb-1" style={styles.original_title}>{movie.original_title}</Text>
              <Text style={styles.release_date}>{movie.release_date}</Text>
              <Score score={movie.popularity} maxScore={1000}/>
              <Text className="mt-2 flex-shrink" style={styles.overview}>{movie.overview.slice(0,10)} ...</Text>
            </View>     
       
        </View>
    )
}

export function AnimatedMovieCard({movie, index}){
   const opacity = useRef(new Animated.Value(0)).current;

   useEffect(() => {
       Animated.timing(opacity, {
           toValue: 1,
           duration: 1000,
           delay: index * 250,
           useNativeDriver: true,
       }).start();
   }, [opacity, index]);
   return (
    <Animated.View style={{opacity}} 
       
        >
            <MovieCard movie={movie}/>
    </Animated.View>
   )
}

const styles = StyleSheet.create({
    card: {
      marginBottom: 36,
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    original_title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      color: '#fff',
    },
    overview: {
      fontSize: 16,
      color: '#eee',
      marginTop: 10,
    },
    release_date: {
      fontSize: 14,
      color: '#fff',
    },
    popularity: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'green',
      margiunTop: 10,
    },
  
  });
  