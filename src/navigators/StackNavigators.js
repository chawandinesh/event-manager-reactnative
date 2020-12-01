import * as React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigator from "./TabNavigator";
import store from "../redux/store/store";
import AddPersonalEvents from "../screens/events/AddEvent";
import ShowPersonalEvents from "../screens/events/ShowEvents";
import UpdatePersonalEvents from "../screens/events/UpdateEvents";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Personal"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddPersonalEvents"
            component={AddPersonalEvents}
            options={{
              headerTitle: "Add Detail",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#495" },
              headerTitleStyle: { color: "#fff" },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="ShowPersonalEvents"
            component={ShowPersonalEvents}
            options={{ headerTitle: "Show Events" }}
          />
          <Stack.Screen
            name="UpdatePersonalEvents"
            component={UpdatePersonalEvents}
            options={{ headerTitle: "Update Events" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
