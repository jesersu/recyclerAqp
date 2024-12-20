import { Link } from 'expo-router';
import { Text, View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Stack } from 'expo-router';
import { useEffect, useState } from "react";
import { Screen } from '../components/Screen';
import { useLocalSearchParams } from 'expo-router';
import { getMovieDetails } from '../lib/metacritic';

export default function Detail() {
    const { id } = useLocalSearchParams();
    const [movieInfo, setMovieInfo] = useState(null);
    useEffect(() => {
        if (id) {
            getMovieDetails(id).
                then((movieInfo) => {
                    console.log("q va ser", movieInfo);
                    setMovieInfo(movieInfo);
                });
        }

    }, [id]);

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: 'yellow',
                    },
                    headerTintColor: 'black',
                    headerTitle: "movie",

                }}
            />
            <View className="flex-1 justify-center items-center">
                {
                    movieInfo === null ? (
                        <ActivityIndicator color={"red"} size={"large"} />
                    ) : (
                        <ScrollView>
                            <View>

                                <Image
                                    className="mb-4 rounded"
                                    source={{
                                        uri: movieInfo.img,
                                    }}
                                    style={{ width: 214, height: 294, backgroundColor: "white" }} />

                                <Text className="text-white font-bold mb-8 text-2xl">
                                    {movieInfo.original_title}

                                </Text>
                                <Text className="text-white mb-8">
                                    {movieInfo.overview}

                                </Text>
                                <Text className="text-white mb-8">
                                    {movieInfo.popularity}

                                </Text>
                                <Link href="/" className="text-blue-500">
                                    Vovler Atras
                                </Link>

                            </View>

                        </ScrollView>
                    )
                }

            </View>
        </Screen>

    )
}