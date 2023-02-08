import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from '../redux/slices/BasketSlice';

const DishRow = ({ dish, id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const dispatch = useDispatch();
  const {items} = useSelector(state => state.basket);

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}));
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={isPressed ? `px-3 py-3` :  `px-3 py-3 border-t border-b border-gray-200`}
      >
        <View className="flex flex-row justify-between items-start py-2">
          <View key={dish.id}>
            <Text className="font-bold text-[20px] mb-2">{dish.name}</Text>
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
      </TouchableOpacity>

      {isPressed && (
        <View className="px-3 mt-3 flex flex-row items-center mb-2">
          <TouchableOpacity className="bg-red-600 p-2 rounded-lg">
            <Text className="mr-2 text-white font-bold">- 1</Text>
          </TouchableOpacity>
          <Text className="ml-2 mr-2">{items.length}</Text>
          <TouchableOpacity 
          onPress={addItemToBasket}
          className="bg-red-600 p-2 rounded-lg">
            <Text className=" text-white font-bold">+ 1</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
