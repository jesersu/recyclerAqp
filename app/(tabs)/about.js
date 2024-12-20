import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { ArrowLeftIcon } from "../../components/Icons";
import { View } from "react-native-web";
import { Screen } from "../../components/Screen";

export default function About() {
    return (
        <Screen>
            <ScrollView>
                <Link asChild href="/" className=" text-blue-400 text-xl mt-24">
                    <Pressable>
                        {({ pressed }) => <ArrowLeftIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
                    </Pressable>

                </Link>
                <Text className="text-white font-bold mb-8 text-2xl">
                    Sobre el proyecto
                </Text>
                <Text className="text-white/90 mb-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                </Text>
                <Text className="text-white/90 mb-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                </Text>
                <Text className="text-white/90 mb-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                </Text>
                <Text className="text-white/90 mb-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                </Text>
            </ScrollView>
        </Screen>
    );
}