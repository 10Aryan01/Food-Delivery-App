import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../Theme/Theme'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItmes, selectCartTotal } from '../Slices/carSlice'


const Carticon = () => {
  const navigation = useNavigation()
  const cartItems = useSelector(selectCartItmes);
  const cartTotal = useSelector(selectCartTotal);


  if (!cartItems.length) return;


  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
        <View className="p-2 px-4 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.6)" }}>
          <Text className="font-extrabold text-white text-lg">
            {cartItems.length}
          </Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg"> $&nbsp;{cartTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Carticon