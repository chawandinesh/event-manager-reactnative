import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Personal from "../screens/events/EventsScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Personal"
        component={Personal}
        initialParams={{ type: "Personal" }}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user-o"
              size={focused ? 30 : 23}
              color={focused ? "green" : "gray"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: focused ? 15 : 10,
                color: focused ? "green" : "black",
              }}
            >
              Personal
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Professional"
        component={Personal}
        initialParams={{ type: "Professional" }}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user-secret"
              size={focused ? 30 : 23}
              color={focused ? "green" : "gray"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: focused ? 15 : 10,
                color: focused ? "green" : "black",
              }}
            >
              Professional
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Social"
        component={Personal}
        initialParams={{ type: "Social" }}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="handshake-o"
              size={focused ? 30 : 23}
              color={focused ? "green" : "gray"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: focused ? 15 : 10,
                color: focused ? "green" : "black",
              }}
            >
              Social
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Others"
        component={Personal}
        initialParams={{ type: "Others" }}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="ellipsis-h"
              size={focused ? 30 : 23}
              color={focused ? "green" : "gray"}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: focused ? 15 : 10,
                color: focused ? "green" : "black",
              }}
            >
              Others
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
