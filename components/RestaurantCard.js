import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          shortDescription,
          dishes,
          long,
          lat,
        });
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex flex-row items-center space-x-1">
          <Text>Stars</Text>
          <Text>
            Rating:
            <Text className="text-green-500"> {rating}</Text> • {genre}
          </Text>
        </View>
        <View className="flex flex-row items-center space-x-1 mt-1">
          <Text className="text-xs text-gray-500">
            Location: Nearby • {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
