import Company from "@/pages/Company";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import theme from "@/theme";
import Register from "@/pages/Company/Register";
import RouterNames from ".";

const Stack = createNativeStackNavigator();

const InternalRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={RouterNames.Home}
        component={Company}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: theme.colors.frostbite,
          },
          headerTintColor: theme.colors.black,
          headerTitleStyle: {
            fontWeight: "bold",
            color: theme.colors.black,
          },
          contentStyle: {
            backgroundColor: theme.colors.white,
          },
        }}
      />
      <Stack.Screen
        name={RouterNames.NewCompany}
        component={Register}
        options={{
          title: "Registrar Empresa",
          headerStyle: {
            backgroundColor: theme.colors.frostbite,
          },
          headerTintColor: theme.colors.black,
          headerTitleStyle: {
            fontWeight: "bold",
            color: theme.colors.black,
          },
          contentStyle: {
            backgroundColor: theme.colors.white,
          },
          headerLargeTitleStyle: {
            color: theme.colors.black,
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default InternalRouter;
