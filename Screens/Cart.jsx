import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { featured } from '../Constants/List'
import { themeColors } from '../Theme/Theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../Slices/RestaurentSlice';
import { removeFromCart, selectCartItmes, selectCartTotal } from '../Slices/carSlice';
import { urlFor } from '../Sanity';

const Cart = () => {
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation()
    const cartItems = useSelector(selectCartItmes);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItems, setGroupItems] = useState({});
    const dispatch = useDispatch()
    const delivery = 40;

    useEffect(() => {
        const items = cartItems.reduce((group, item) => {
            if (group[item._id]) {
                group[item._id].push(item);
            }
            else {
                group[item._id] = [item]
            }
            return group;
        }, {})
        setGroupItems(items);
    }, [cartItems])
    return (
        <View className="bg-white flex-1">
            <View className="relative py-4 mt-10  shadow-sm">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="absolute z-10 rounded-full p-1 shadow top-3 ml-5 left-2"
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke='white' />
                </TouchableOpacity>
                <Text className="text-center font-bold text-lg">
                    Your Cart
                </Text>
                <Text className="text-center text-gray-500 mb-4">{restaurant.name}</Text>
                <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                    className="flex-row px-4 items-center"
                >
                    <Image source={require("../assets/images/bikeGuy.png")} className="w-20 h-20 rounded-full" />
                    <Text className="flex-1 pl-4">Delivery in 20-30 minutes</Text>
                    <TouchableOpacity>
                        <Text className="font-bold" style={{ color: themeColors.text }}>Change</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                className="bg-white pt-5"
            >
                {
                    Object.entries(groupedItems).map(([key, items]) => {
                        let dish = items[0]
                        return (
                            <View key={key}
                                className="flex-row items-center space-x-3 py-2 px-6 bg-white rounded-3xl mx-2 mb-3 shadow-xl" style={{
                                    shadowColor: "rgba(0,0,0,0.3)",
                                    shadowRadius: 7

                                }}>
                                <Text className="font-bold" style={{ color: themeColors.text }}>{items.length} x </Text>
                                <Image className="h-14 w-14 rounded-full"
                                    source={{ uri: urlFor(dish.image).url() }} />
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="font-semibold text-base ">$&nbsp;{dish.price}</Text>
                                <TouchableOpacity
                                    onPress={() => dispatch(removeFromCart({ id: dish._id }))}
                                    className="p-1 rounded-full"
                                    style={{ backgroundColor: themeColors.bgColor(1) }}
                                >
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <View className='p-6 px-8 rounded-t-3xl space-y-4' style={{ backgroundColor: themeColors.bgColor(0.2) }}>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700 font-extrabold">$&nbsp;{cartTotal}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700 font-extrabold">$&nbsp;{delivery}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 ">GST</Text>
                    <Text className="text-gray-700 font-extrabold">$&nbsp;5 </Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700 font-extrabold ">Order Total</Text>
                    <Text className="text-gray-700 font-extrabold">$&nbsp;{delivery + cartTotal}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('orderprepare')}
                        style={{ backgroundColor: themeColors.bgColor(1) }}
                        className="p-3 rounded-full"
                    >
                        <Text className="text-white text-center fold-bold text-lg font-extrabold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Cart