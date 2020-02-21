import React from "react";
import { Text, View, Image, ImageBackground, SafeAreaView } from "react-native";
import { Spinner } from "../common";

export default function() {
  return (
    // <ImageBackground
    //   source={justLoadingImageScreen.backgroundImage}
    //   style={styles.backgroundImageStyle}
    // >
    //   <SafeAreaView style={{ flex: 1 }}>
    <Spinner color="black" />
    //   </SafeAreaView>
    // </ImageBackground>
  );
}
