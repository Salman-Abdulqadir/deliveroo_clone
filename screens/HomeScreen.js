import { Image, View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

//icons
import {ChevronDownIcon} from "react-native-heroicons/outline"


const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" mx-5 my-10">
      <View className="flex-row items-center pb-3 space-x-2">
        <Image
          source={{
            url: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text className="font-bold text-gray-500 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location 
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
