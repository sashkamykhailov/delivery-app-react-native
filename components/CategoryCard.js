import { Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image
          style={{width: 80, height: 80}}
          source={{
            uri: imgUrl,
          }}
          className="bg-gray-300 rounded"
        />
        <Text className="absolute text-white font-bold bottom-1 left-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
