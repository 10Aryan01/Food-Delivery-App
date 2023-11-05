// import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
// import React from "react";
// import { categories } from "../Constants/List";
// const Categories = () => {
//   return (
//     <View className="mt-4">
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         className="overflow-visible"
//         contentContainerStyle={{
//           paddingHorizontal: 15,
//         }}
//       >
//         {categories.map((category, index) => {
//           return (
//             <View key={index} className="flex justify-center items-center mr-10">
//               <TouchableOpacity className="p-1 rounded-full shadow bg-">
//                 <Image
//                   style={{ width: 45, height: 45 }}
//                   source={category.image}
//                 />
//                 <Text>{category.name}</Text>
//               </TouchableOpacity>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// };

// export default Categories;
