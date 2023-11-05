import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import RestorentScreen from "./Screens/RestorentScreen";
import OrderPrepare from "./Screens/OrderPrepare";
import Cart from "./Screens/Cart";
import Delivery from "./Screens/Delivery";
import store from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Rs" component={RestorentScreen} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen
            name="orderprepare"
            options={{ presentation: "fullScreenModal" }}
            component={OrderPrepare}
          />
          <Stack.Screen
            name="delivery"
            options={{ presentation: "fullScreenModal" }}
            component={Delivery}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
  