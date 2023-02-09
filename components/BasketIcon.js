import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../redux/slices/BasketSlice';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  if (items.length <= 0) return null;

  return (
    <View className='w-full z-50'>
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className='bg-[#00ccbb] p-2 rounded-lg flex-row items-center space-x-1'
      >
        <Text className='text-white font-extrabold text-lg bg-[#01a296] py-1 px-2'>
          {items.length}
        </Text>
        <Text className='text-lg text-white font-extrabold'>
          ${basketTotal.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
