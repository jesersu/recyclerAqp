import { Link } from 'expo-router';
import { Text, View } from 'react-native';
export default function Detail() {
    return (
        <View className="flex-1 justify-center items-center bg-black">

            <View>
                <Text className="text-white font-bold mb-8 text-2xl">
                    Detalle de la pelicula
                </Text>
                <Link href="/" className="text-blue-500">
                    Volver atras
                </Link>

            </View>
        </View>
    )
}