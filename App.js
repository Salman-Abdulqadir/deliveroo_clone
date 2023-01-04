import { StatusBar } from "expo-status-bar";
import {Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text  className="text-green-500">What's up</Text>
      <StatusBar style="auto" />
    </View>
  );
}


