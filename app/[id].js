import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { Screen } from '../components/Screen';
export default function Detail() {
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
                <View>
                    <Text className="text-white font-bold mb-8 text-2xl">
                        Detalle de la pelicula
                    </Text>
                    <Link href="/" className="text-blue-500">
                        Volver atras
                    </Link>

                </View>
            </View>
        </Screen>

    )
}