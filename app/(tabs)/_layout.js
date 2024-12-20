import { Tabs } from "expo-router";
import { View } from "react-native";
import { HomeIcon, InfoIcon } from "../../components/Icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: "yellow",
            }}
        >

            <Tabs.Screen
                name="index"

                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "Aout",
                    tabBarIcon: ({ color }) => <InfoIcon color={color} />,
                }}
            />
        </Tabs>
    )
}