import Company from "@/pages/Company";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@/theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Company}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: theme.colors.frostbite,
              },
              headerTintColor: theme.colors.black,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen name="Details" component={Company} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
