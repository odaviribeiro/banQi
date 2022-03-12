import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@/theme";
import InternalRouter from "./src/routes/Internal";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <InternalRouter />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
