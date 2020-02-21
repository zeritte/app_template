import React from "react";
import { SafeAreaView } from "react-native";
import { Navbar } from "./Navbar";

export const ZContainer = props => {
  const { bgColor } = props;
  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: bgColor ? bgColor : "white" }, props.containerStyle]}
    >
      {!props.noNavbar && (
        <Navbar
          left={props.navbarLeft}
          onLeftPress={props.navbarLeftPress}
          style={props.navbarStyle}
          right={props.navbarRight}
          onRightPress={props.navbarRightPress}
        />
      )}
      {props.children}
    </SafeAreaView>
  );
};
