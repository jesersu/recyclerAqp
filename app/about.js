import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function About() {
    return (
        <ScrollView>
            <Link href="/" className="text-blue-400 text-xl mt-24">
                <Pressable>
                    <FontAwesome name="arrow-left" size={24} color="white" />
                </Pressable>
            </Link>
            <Text className="text-white font-bold mb-8 text-2xl">Sore el proyecto</Text>
            <Text className=" text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            </Text>
            <Text className=" text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            </Text>
            <Text className=" text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            </Text>
            <Text className=" text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            </Text>
        </ScrollView>
    );
}