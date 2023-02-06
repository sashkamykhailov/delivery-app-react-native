import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { urlFor } from "../sanity";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-3 top-10 p-2 bg-gray-100 rounded-lg"
          >
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <View className="px-3 pt-4">
          <Text className="text-[30px] font-bold">{title}</Text>
          <View className="flex flex-row justify-start items-center pt-4">
            <Text className="mr-2 text-[15px]">
              Stars:{" "}
              <Text className="text-green-400 text-[15px]">{rating}</Text>
            </Text>
            <Text className="mr-2 text-[15px]">Loc: Nearby</Text>
            <Text className="font-bold text-[15px]">- {address}</Text>
          </View>
          <View className="mt-4">
            <Text className="text-[18px]">
              Please, find below dishes that{title} offers:
            </Text>
          </View>
        </View>
        <TouchableOpacity className="flex flex-row justify-between mt-3 p-3 border-t border-b border-gray-200">
          <View className="flex flex-row ">
            <Text className="mr-2">Questions?</Text>
            <Text className="font-bold">Have a food allergy?</Text>
          </View>
          <Text>Ask more</Text>
        </TouchableOpacity>
        <View className="px-3 py-4 bg-gray-200">
          <View className="">
            <Text className="text-[25px] font-bold">Menu</Text>
          </View>
        </View>
        {dishes?.map((dish) => {
          return (
            <View className="px-3 py-3 border-t border-b border-gray-200">
              <View className="flex flex-row justify-between items-start py-2">
                <View key={dish.id}>
                  <Text className="font-bold text-[20px] mb-2">
                    {dish.name}
                  </Text>
                  <Text className="w-[200px]">{dish.short_description}</Text>
                </View>
                <View className="">
                  <Image
                    source={{
                      uri: urlFor(dish.image).url(),
                    }}
                    className="h-24 w-36"
                  />
                </View>
              </View>
              <View>
                <Text className="mt-2">{dish.price} Zl.</Text>
              </View>
              <View className="mt-3 flex flex-row items-center">
                <Text className="mr-1">-</Text>
                <Text className="mr-1">3</Text>
                <Text>+</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
