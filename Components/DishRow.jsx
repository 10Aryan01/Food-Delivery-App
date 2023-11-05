import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../Theme/Theme'
import * as Icon from "react-native-feather";
import Carticon from './Carticon';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItmes, selectCartItmesById } from '../Slices/carSlice';
import { urlFor } from '../Sanity';
import { StyleSheet } from 'react-native';

const DishRow = ({ item }) => {
    const dispatch = useDispatch();
    const handleadd = () => {
        dispatch(addToCart({ ...item }))
    }
    const handleremove = () => {
        dispatch(removeFromCart({ id: item._id }))
    }
    const totalitems = useSelector(state => selectCartItmesById(state, item._id))
    return (
        <View className="flex-row item-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2" style={style.container}>
            <Image className="rounded-3xl" style={{ height: 100, width: 100 }}
                source={{ uri: urlFor(item.image).url() }} />
            <View className="flex flex-1 space-y-3">
                <View className="pl-3">
                    <Text className="text-xl">{item.name}</Text>
                    <Text className="text-gray-700">{item.description}</Text>
                </View>
                <View className="flex-row justify-between pl-3 items-center">
                    <Text className="text-gray-700 text-;g font-bold">
                        ${item.price}
                    </Text>
                    <View className="flex-row items-center">
                        <TouchableOpacity
                            disabled={!totalitems.length}
                            onPress={handleremove}
                            className="p-1 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}
                        >
                            <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                        <Text className='px-3'>{totalitems.length}</Text>
                        <TouchableOpacity
                            onPress={handleadd}
                            className="p-1 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}
                        >
                            <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container:
    {
        shadowColor: "rgba(0,0,0,0.5)"

    },
})
export default DishRow