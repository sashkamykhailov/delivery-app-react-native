import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

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
  return (
    <TouchableOpacity>
      <Image
      source={{uri: imgUrl}}
      className="h-36 w-64 rounded-sm"
      />
      <View className='pb-4'>
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className='flex flex-row items-center space-x-1'>
            <Text>Stars</Text>
            <Text>Rating: 
                <Text className="text-green-500"> {rating}</Text> • {genre}
                </Text>
        </View>
        <View className='flex flex-row items-center space-x-1 mt-1'>
            <Text className="text-xs text-gray-500">Location: Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard