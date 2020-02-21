import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export const Spinner = ({ size, color, style }) => {
  return (
    <View style={[styles.spinnerStyle, style]}>
      <ActivityIndicator size={size || "large"} color={color || "white"} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  }
});
