import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Navbar } from "./Navbar";
import { ZView } from "./ZView";

const _statusHeight = StatusBar.currentHeight || 0;
const StatusHeight = Platform.OS === "android" ? _statusHeight : _statusHeight + 70;

export const InputContainer = props => {
  let { extraScrollHeight } = props;
  extraScrollHeight = isNaN(extraScrollHeight) ? 0 : extraScrollHeight;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {!props.noNavbar && (
        <Navbar
          left={props.navbarLeft}
          onLeftPress={props.navbarLeftPress}
          style={props.navbarStyle}
          right={props.navbarRight}
          onRightPress={props.navbarRightPress}
        />
      )}
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        extraScrollHeight={StatusHeight + extraScrollHeight}
      >
        <ZView flex fullWidth style={props.containerStyle}>
          {props.children}
        </ZView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
