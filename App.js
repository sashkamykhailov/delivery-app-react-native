import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";



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
              <Text className='font-bold text-gray-400 text-xs'>Delivery now!</Text>
              <Text className='font-bold text-black text-lg'>
                Current Location
              </Text>
            </View>
          </View>

          <View>
            <Text>USER</Text>
          </View>
        </View>

        {/* Search */}

        <View className='flex flex-row items-center justify-between space-x-2'>
          <View className="flex flex-row space-x-2 items-center w-[85%] px-2 py-1 bg-gray-200">
            <Text>Search Icon</Text>
            <TextInput
            keyboardType="default" 
            placeholder="Restaurants and cousines"
            />
          </View>

          <View className='flex justify-end'>
            <Text>Filters</Text>
          </View>
        </View>


        {/* Body */}

        <ScrollView>
          {/* Categories */}
              {/* 45:39 */}
          {/* Featured Row */}
            
        </ScrollView>

      </View>


    </SafeAreaView>
  );
}
