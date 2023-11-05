import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../Theme/Theme";
import { categories, featured } from "../Constants/List";
import FeaturedRow from "../Components/FeaturedRow";
// import { getCategory } from "../Sanity";
import { getFeatured, getPosts, getcategories } from "../api";
import { urlFor } from "../Sanity";

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  const handlenext = () => {
    navigation.navigate("Rs");
  };
  const [activeCatagory, setActiveCategory] = useState(null);


  useEffect(() => {
    getcategories().then(data =>
      setCategories(data)
    );



    getFeatured().then(data =>
      setFeaturedRestaurants(data)
    )
    console.log("This is all featured restaurants : ",featuredRestaurants)
  }, [])




  return (
    <SafeAreaView className="bg-white pt-3 mb-4">
      <StatusBar barStyle="dark-Content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Resturents" className="ml-2 flex-1" />
          <View className="flex-row  items-center space-x-l border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-grey-600">Dibrugarh</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokewidth={2.5}
            stroke="white"
          />
        </View>
      </View>
      {/* main */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <View className="mt-4">
          <ScrollView
            // className="p-4"
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{
              paddingHorizontal: 15,
            }}
          >
            {categories.map((category) => {
              let isactive = category._id == activeCatagory;
              let btnclass = isactive ? "bg-gray-300" : "bg-gray-100";
              let textclass = isactive
                ? "font-semibold text-gray-800"
                : "text-gray-500";
              return (
                <View
                  key={category._id}
                  className="flex justify-center items-center mr-6"
                >
                  <TouchableOpacity
                    onPress={() => {
                      setActiveCategory(category._id);
                    }}
                    className={`p-2 rounded-full shadow bg-gray-200  ${btnclass}`}
                  >
                    <Image
                      style={{ width: 45, height: 45 }}
                      source={{ uri: urlFor(category.image).url() }}
                    />
                  </TouchableOpacity>
                  <Text className={`text-sn ${textclass}`}>{category.name}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        {/*featured row */}
        <View className="mt-5"  >
          {
            featuredRestaurants.map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.name}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: '#F8F8F8',
  },
});

export default Home;
