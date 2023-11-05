import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../Constants/List'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { themeColors } from '../Theme/Theme';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../Slices/RestaurentSlice';
import { emptyCart } from '../Slices/carSlice';

const Delivery = () => {
    const restaurant = useSelector(selectRestaurant)
    console.log("This is the restaurant : ",restaurant);
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const cancelOrder = () => {
        dispatch(emptyCart());
        navigation.navigate("Home")
    }
    return (
        <View className="flex-1">
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                className='flex-1'
                mapType='standard'
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.lng,
                    }}
                    title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor(0.7)}
                />
            </MapView>
            <View className="rounded-t-3xl -mt-12 bg-white relative">
                <View className="flex-row justify-between px-5 pt-10">
                    <View>
                        <Text className="text-lg text-grey-700 font-semibold">
                            Estimated Time
                        </Text>
                        <Text className="text-3xl text-grey-700 font-semibold">
                            20-30 minites
                        </Text>
                        <Text className="mt-2 text-gray-700 font-semibold"> Your order on its Way</Text>
                    </View>
                    <Image className="w-24 h-24" source={require("../assets/images/bikeGuy2.gif")} />
                </View>
                <View
                    style={{ backgroundColor: themeColors.bgColor(0.8) }}
                    className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
                    <View className="p-1 rounded-full"
                        style={{ backgroundColor: "rgba(255,255,255,0.4" }}>
                        <Image source={require("../assets/images/Aryan.png")}
                            className="h-16 w-16 rounded-full" />
                    </View>
                    <View className="flex-1 ml-3">
                        <Text className="text-2xl font-bold text-white">Aryan</Text>
                        <Text className=" font-bold text-white">Your Rider</Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                            <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-white p-2 rounded-full"
                            onPress={() => cancelOrder()}
                        >
                            <Icon.X fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={5} />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>
    )
}

export default Delivery