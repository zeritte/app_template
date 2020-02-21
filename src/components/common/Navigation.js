import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

// auth screens
import LoadingScreen from "../screens/LoadingImageScreen";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";

// inapp screens
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen
  },
  {
    headerMode: "none",
    defaultNavigationOptions: {
      gestureEnabled: false
    }
  }
);

const InAppStack = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (
            <MaterialCommunityIcons
              name={`view-dashboard${focused ? "" : "-outline"}`}
              size={24}
              color={tintColor}
            />
          );
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return <FontAwesome name={`user${focused ? "" : "-o"}`} size={24} color={tintColor} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true
    }
  }
);

const RootNavigator = createAnimatedSwitchNavigator({
  Splash: SplashScreen,
  Auth: AuthStack,
  App: InAppStack
});

const AppNavigator = createAppContainer(RootNavigator);

export { AppNavigator, LoadingScreen };
