import { Link, Stack } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import "../global.css";
import { Logo } from '../components/Logo';
import { CircleInfoIcon } from '../components/Icons';

export default function Layout() {
  return (
    <View className="flex-1 bg-black ">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitle: "",
          headerLeft: () => (
            <Logo />
          ),
          headerRight: () => (
            <Link asChild href="/about" >
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          )
        }} />
    </View>
  );
}