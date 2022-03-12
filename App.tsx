import Company from "@/pages/Company";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Company}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: "#f230a3",
              },
              headerTintColor: "#000000",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen name="Details" component={Company} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
