import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../Theme/Theme';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../Sanity';

const ResturentCard = ({ item }) => {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Rs', { ...item })
            }
        >
            <View className="mr-6 mb-3 bg-white rounded-3xl shadow-xl"
                style={{
                    shadowColor: themeColors.bgColor(0.4),
                    shadowRadius: 7
                }}
            >
                <Image className="h-36 w-64 rounded-t-3xl " source={{ uri: urlFor(item.image).url() }} />
                <View className="px-3 pb-4 space-y-2 shadow-lg">
                    <Text className='text-lg font-bold pt-2'>{item.name}</Text>
                    <View className="flex-row item-center space-x-l">
                        <Image source={require("../assets/images/fullStar.png")} className='h-4 w-4' />
                        <Text className="text-green-700">{item.stars}</Text>
                        <Text className='text-gray-700'>
                            ({item.reviews} review) . <Text className='font-semibold'>{item?.type?.name}</Text>
                        </Text>
                    </View>
                    <View className='flex-row item-center space-x-l'>
                        <Icon.MapPin color='gray' width='15' height='15' />
                        <Text className="text-gray-700 text-xs">Nearby {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ResturentCard

