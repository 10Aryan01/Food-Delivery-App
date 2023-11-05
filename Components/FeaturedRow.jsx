import { View, Text, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../Theme/Theme'
import ResturentCard from './ResturentCard'
import * as Icon from "react-native-feather";

const FeaturedRow = ({ title, description, restaurants }) => {
    return (
        <View>
            <View className='flex-row justify-between items-center px-4'>
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }} className='font-semibold'>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15

                }}
                className='overflow-visible py-5 bg-red'>
                {
                    restaurants.map((resturant, index) => {
                        return (
                            <ResturentCard
                                item={resturant}
                                key={index}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default FeaturedRow