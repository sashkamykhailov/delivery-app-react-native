import { View, Text, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between ">
        <Text className="font-bold text-lg">{title}</Text>
        <Text>-&gt; </Text>
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          imgUrl="https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          shortDescription="Very famous sushi from UK"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={123}
          imgUrl="https://cdn.aniagotuje.com/pictures/articles/2022/08/31553101-v-1080x1080.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          shortDescription="Very famous sushi from UK"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={123}
          imgUrl="https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          shortDescription="Very famous sushi from UK"
          dishes={[]}
          long={20}
          lat={0}
        />

        <RestaurantCard
          id={123}
          imgUrl="https://cdn.aniagotuje.com/pictures/articles/2022/08/31553101-v-1080x1080.jpg"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St."
          shortDescription="Very famous sushi from UK"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
