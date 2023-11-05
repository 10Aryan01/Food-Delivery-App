import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '../Theme/Theme';
import DishRow from '../Components/DishRow';
import Carticon from '../Components/Carticon';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../Slices/RestaurentSlice';
import { urlFor } from '../Sanity';
const RestorentScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation()
  let item = params;
  const dispatch = useDispatch();
  useEffect(() => {
    if (item && item._id) {
      dispatch(setRestaurant({ ...item }))
    }
  }, [])
  return (
    <View>
      <Carticon />
      <StatusBar style="Light" />
      <ScrollView >
        <View className='relative'>
          <Image className='w-full h-72' source={{ uri: urlFor(item.image).url() }} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={4} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopRightRadius: 40, borderTopLeftRadius: 40,
          }}
          className='bg-white -mt-12 pt-6'
        >
          <View className="px-5">
            <Text className='text-3xl font-bold'>{item.name}</Text>
            <View className="flex-row space-x-1 ">
              <View className="flex-row item-center space-x-l">
                <Image source={require("../assets/images/fullStar.png")} className='h-4 w-4' />
                <Text className="text-green-700">{item.stars}&nbsp;</Text>
                <Text className='text-gray-700'>
                  ({item.reviews} review)  <Text className=''>{item?.type?.name}</Text>
                </Text>
              </View>
              <View className='flex-row item-center space-x-l'>
                <Icon.MapPin color='gray' width='15' height='15' />
                <Text className="text-gray-700 text-xs"> {item.address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/*Dishses */}
          {
            item.dishes.map((dish, index) => <DishRow item={{ ...dish }} key={index} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default RestorentScreen