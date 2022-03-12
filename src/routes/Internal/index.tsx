import Company from "@/pages/Company";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import theme from "@/theme";
import Register from "@/pages/Company/Register";

const Stack = createNativeStackNavigator();

const InternalRouter = () => {
  return (
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
          contentStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name="NewCompany"
        component={Register}
        options={{
          title: "Nova Empresa",
          headerStyle: {
            backgroundColor: theme.colors.frostbite,
          },
          headerTintColor: theme.colors.black,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default InternalRouter;
