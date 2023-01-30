import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Categories from "./components/Categories";
import FeaturedRow from "./components/FeaturedRow";

export default function App() {
  return (
    <SafeAreaView className="pt-5 bg-white">
      {/* Header */}
      <View className="px-4">
        <View className="flex flex-row justify-between items-center">
          <View className="flex-row pb-3 items-center space-x-2 flex">
            <Image
              source={{
                uri: "https://www.bworldonline.com/wp-content/uploads/2021/11/food-delivery.jpg",
              }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex">
              <Text className="font-bold text-gray-400 text-xs">
                Delivery now!
              </Text>
              <Text className="font-bold text-black text-lg">
                Current Location
              </Text>
            </View>
          </View>

          <View>
            <Text>USER</Text>
          </View>
        </View>

        {/* Search */}

        <View className="flex flex-row items-center justify-between space-x-2">
          <View className="flex flex-row space-x-2 items-center w-[85%] px-2 py-1 bg-gray-200">
            <Text>Search Icon</Text>
            <TextInput
              keyboardType="default"
              placeholder="Restaurants and cousines"
            />
          </View>

          <View className="flex justify-end">
            <Text>Filters</Text>
          </View>
        </View>

        {/* Body */}

        <ScrollView
          className=""
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <Categories />
          {/* Featured Row */}
          <FeaturedRow
            id="123"
            title='Featured'
            description='Paid placements form our partners'
    
          />
          <FeaturedRow
            id="1234"
            title='Tasty discounts'
            description="Everyone's been enjoying these juicy discounts!"
      
          />
          <FeaturedRow
            id="1235"
            title='Offers near you'
            description='Why not support your local restaurants tonight'

          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
