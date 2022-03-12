import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@/theme";
import InternalRouter from "./src/routes/Internal";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <InternalRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
}
